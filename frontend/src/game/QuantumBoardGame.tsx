import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Shield, ShieldAlert, ShieldCheck, Zap, RotateCcw,
  Sparkles, CheckCircle2, AlertTriangle, Play, HelpCircle,
  Info, Cpu, Clock, Layers, Dice5, Eye, ArrowRight, Dna
} from 'lucide-react';
import type { Budget, Row, Circuit } from './api';
import { INTERPRETATIONS, type Sector } from './story';
import { audio } from './audio';

export interface QuantumBoardGameProps {
  mission: Sector;
  budget: Budget;
  selected: number[];
  checks: number;
  maxChecks: number;
  isT: boolean;
  tCount?: number;
  exact: Row | null;
  shots: number;
  circuit: Circuit | null;
  brief?: {
    status: string;
    reason: string;
    target_fidelity: number | null;
    required_gain: number | null;
    baseline_fidelity: number | null;
    tested_candidates: number;
  } | null;
  interpretation?: string;
  onSetInterpretation?: (val: string) => void;
  onToggleQubit: (q: number) => void;
  onSetChecks: (k: number) => void;
  onEngage: () => void;
  onAutoWin?: () => void;
  suggesting?: boolean;
}

// Board lattice grid sizes (distance d=3 minimal to d=5 full planar surface lattice)
export type BoardGridSize = 3 | 4 | 5;

// Tile types according to Litinski's surface-code board game
type TileType = 'empty' | 'data_patch' | 'ancilla_z' | 'ancilla_x';

interface BoardTile {
  id: string;
  coord: string; // e.g. "A1", "A2", "B1"...
  row: number;
  col: number;
  type: TileType;
  qubitId?: number; // for data patches
  connectedQubits?: number[]; // for ancilla bridges
  hasNoiseThreat?: boolean;
  threatType?: 'X' | 'Z';
  stabilizerLabel?: string;
}

// Generates surface-code lattice tiles adaptively for 3x3, 4x4, or 5x5 dimensions
function createTilesForGrid(size: BoardGridSize, missionId: number, isT: boolean): BoardTile[] {
  const tiles: BoardTile[] = [];
  const colLetters = ['A', 'B', 'C', 'D', 'E'];

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const id = `t-${r}-${c}`;
      const coord = `${colLetters[c]}${r + 1}`;

      // Check if this position is a data patch
      let isDataPatch = false;
      let qId: number | undefined = undefined;
      let hasThreat = false;
      let threat: 'X' | 'Z' | undefined = undefined;

      if (size === 3) {
        if (r === 0 && c === 0) { isDataPatch = true; qId = 0; hasThreat = true; threat = 'X'; }
        else if (r === 0 && c === 2) { isDataPatch = true; qId = 1; hasThreat = true; threat = 'X'; }
        else if (r === 2 && c === 0) { isDataPatch = true; qId = 2; hasThreat = missionId === 2; threat = 'Z'; }
        else if (r === 2 && c === 2) { isDataPatch = true; qId = 3; hasThreat = isT; threat = 'Z'; }
      } else if (size === 4) {
        if (r === 0 && c === 0) { isDataPatch = true; qId = 0; hasThreat = true; threat = 'X'; }
        else if (r === 0 && c === 3) { isDataPatch = true; qId = 1; hasThreat = true; threat = 'X'; }
        else if (r === 3 && c === 0) { isDataPatch = true; qId = 2; hasThreat = missionId === 2; threat = 'Z'; }
        else if (r === 3 && c === 3) { isDataPatch = true; qId = 3; hasThreat = isT; threat = 'Z'; }
      } else if (size === 5) {
        if (r === 0 && c === 0) { isDataPatch = true; qId = 0; hasThreat = true; threat = 'X'; }
        else if (r === 0 && c === 4) { isDataPatch = true; qId = 1; hasThreat = true; threat = 'X'; }
        else if (r === 4 && c === 0) { isDataPatch = true; qId = 2; hasThreat = missionId === 2; threat = 'Z'; }
        else if (r === 4 && c === 4) { isDataPatch = true; qId = 3; hasThreat = isT; threat = 'Z'; }
      }

      if (isDataPatch) {
        tiles.push({
          id,
          coord,
          row: r,
          col: c,
          type: 'data_patch',
          qubitId: qId,
          hasNoiseThreat: hasThreat,
          threatType: threat,
        });
        continue;
      }

      // Inter-qubit routing slots hold physical syndrome stabilizers
      let connQubits: number[] = [];
      let label = 'Z ⊗ Z';

      if (size === 3) {
        if (r === 0 && c === 1) { connQubits = [0, 1]; label = 'Z₀ ⊗ Z₁'; }
        else if (r === 1 && c === 0) { connQubits = [0, 2]; label = 'X₀ ⊗ X₂'; }
        else if (r === 1 && c === 1) { connQubits = [0, 1, 2, 3]; label = 'Z₀Z₁Z₂Z₃'; }
        else if (r === 1 && c === 2) { connQubits = [1, 3]; label = 'X₁ ⊗ X₃'; }
        else if (r === 2 && c === 1) { connQubits = [2, 3]; label = 'Z₂ ⊗ Z₃'; }
      } else if (size === 4) {
        if (r === 0) { connQubits = [0, 1]; label = c === 1 ? 'Z₀ ⊗ A' : 'A ⊗ Z₁'; }
        else if (r === 3) { connQubits = [2, 3]; label = c === 1 ? 'Z₂ ⊗ A' : 'A ⊗ Z₃'; }
        else if (c === 0) { connQubits = [0, 2]; label = r === 1 ? 'X₀ ⊗ A' : 'A ⊗ X₂'; }
        else if (c === 3) { connQubits = [1, 3]; label = r === 1 ? 'X₁ ⊗ A' : 'A ⊗ X₃'; }
        else if (r === 1 && c === 1) { connQubits = [0, 1, 2]; label = 'Z₀ ⊗ Z₁ ⊗ Z₂'; }
        else if (r === 1 && c === 2) { connQubits = [1, 3]; label = 'X₁ ⊗ X₃ ⊗ Anc'; }
        else if (r === 2 && c === 1) { connQubits = [0, 2]; label = 'X₀ ⊗ X₂ ⊗ Anc'; }
        else if (r === 2 && c === 2) { connQubits = [1, 2, 3]; label = 'Z₁ ⊗ Z₂ ⊗ Z₃'; }
      } else if (size === 5) {
        if (r === 0) { connQubits = [0, 1]; label = c === 2 ? 'Z₀ ⊗ Z₁' : c === 1 ? 'Z₀ ⊗ A₁' : 'A₂ ⊗ Z₁'; }
        else if (r === 4) { connQubits = [2, 3]; label = c === 2 ? 'Z₂ ⊗ Z₃' : c === 1 ? 'Z₂ ⊗ A₁' : 'A₂ ⊗ Z₃'; }
        else if (c === 0) { connQubits = [0, 2]; label = r === 2 ? 'X₀ ⊗ X₂' : r === 1 ? 'X₀ ⊗ A₁' : 'A₂ ⊗ X₂'; }
        else if (c === 4) { connQubits = [1, 3]; label = r === 2 ? 'X₁ ⊗ X₃' : r === 1 ? 'X₁ ⊗ A₁' : 'A₂ ⊗ X₃'; }
        else if (r === 2 && c === 2) {
          connQubits = [0, 1, 2, 3];
          label = isT ? '|T⟩ Factory' : 'Z₀Z₁Z₂Z₃';
        } else {
          const isEven = (r + c) % 2 === 0;
          if (r === 1 || r === 2 || r === 3) {
            connQubits = c <= 2 ? (r <= 2 ? [0, 1] : [0, 2, 3]) : (r <= 2 ? [1, 3] : [1, 2, 3]);
          }
          label = isEven ? 'Z-Plaquette' : 'X-Star (d=5)';
        }
      }

      tiles.push({
        id,
        coord,
        row: r,
        col: c,
        type: 'empty',
        connectedQubits: connQubits,
        stabilizerLabel: label,
      });
    }
  }

  return tiles;
}

export default function QuantumBoardGame({
  mission,
  budget,
  selected,
  checks,
  maxChecks,
  isT,
  tCount = 1,
  exact,
  shots,
  circuit,
  brief,
  interpretation = '',
  onSetInterpretation,
  onToggleQubit,
  onSetChecks,
  onEngage,
  onAutoWin,
  suggesting = false,
}: QuantumBoardGameProps) {
  // Grid Lattice Dimension State (3x3 Standard, 4x4 Tactical, 5x5 Full Surface Code)
  const [gridSize, setGridSize] = useState<BoardGridSize>(3);

  // Active tool in player's hand
  const [activeTool, setActiveTool] = useState<'bridge_z' | 'bridge_x' | 'remove'>('bridge_z');

  // Dice roll state
  const [isRolling, setIsRolling] = useState(false);
  const [diceNumber, setDiceNumber] = useState<number>(3);
  const [diceDisplay, setDiceDisplay] = useState<string>('⚂');
  const [turnStep, setTurnStep] = useState<number | null>(null); // 1 = noise strike, 2 = ancilla parity alarm, 3 = post-select purify
  const [struckTileId, setStruckTileId] = useState<string | null>(null);
  const [alarmedAncillaId, setAlarmedAncillaId] = useState<string | null>(null);
  const [strikeDescription, setStrikeDescription] = useState<string>('');
  const [simulationResult, setSimulationResult] = useState<{
    status: 'clean' | 'alarm_purified' | 'corrupted';
    message: string;
  } | null>(null);
  const [ruleAlert, setRuleAlert] = useState<string | null>(null);

  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  const [tiles, setTiles] = useState<BoardTile[]>(() => createTilesForGrid(3, mission.id, isT));

  // Auto-initialize interpretation for Sector 4 diagnostic quiz
  useEffect(() => {
    if (isT && !interpretation && onSetInterpretation) {
      onSetInterpretation('different_ideals_not_causal');
    }
  }, [isT, interpretation, onSetInterpretation]);

  // Sync board tiles when checks/selected/gridSize change
  useEffect(() => {
    setTiles((prev) => {
      const currentTiles = prev.length === gridSize * gridSize ? prev : createTilesForGrid(gridSize, mission.id, isT);
      const topBridgeId = gridSize === 3 ? 't-0-1' : gridSize === 4 ? 't-0-1' : 't-0-2';
      const leftBridgeId = gridSize === 3 ? 't-1-0' : gridSize === 4 ? 't-1-0' : 't-2-0';
      const rightBridgeId = gridSize === 3 ? 't-1-2' : gridSize === 4 ? 't-1-3' : 't-2-4';
      const bottomBridgeId = gridSize === 3 ? 't-2-1' : gridSize === 4 ? 't-3-1' : 't-4-2';

      return currentTiles.map((t) => {
        if (t.type === 'data_patch') return t;
        if (checks >= 1 && selected.includes(0) && selected.includes(1) && t.id === topBridgeId) {
          return { ...t, type: 'ancilla_z' };
        }
        if (checks >= 1 && selected.includes(2) && !selected.includes(0) && t.id === leftBridgeId) {
          return { ...t, type: 'ancilla_x' };
        }
        if (checks >= 1 && selected.includes(1) && !selected.includes(0) && t.id === rightBridgeId) {
          return { ...t, type: 'ancilla_z' };
        }
        if (checks >= 2 && selected.includes(2) && t.id === leftBridgeId) {
          return { ...t, type: 'ancilla_x' };
        }
        if (checks >= 2 && selected.includes(3) && t.id === bottomBridgeId) {
          return { ...t, type: 'ancilla_z' };
        }
        if (checks === 1 && selected.includes(0) && t.id === topBridgeId) {
          return { ...t, type: 'ancilla_z' };
        }
        return { ...t, type: 'empty' };
      });
    });
  }, [checks, selected, gridSize, mission.id, isT]);

  // Switch lattice dimension handler
  const handleGridSizeChange = (newSize: BoardGridSize) => {
    if (newSize === gridSize) return;
    setGridSize(newSize);
    setStruckTileId(null);
    setAlarmedAncillaId(null);
    setTurnStep(null);
    setSimulationResult(null);
    audio.play('select');
  };

  // Handle clicking on board tiles
  const handleTileClick = (tile: BoardTile) => {
    setRuleAlert(null);

    // Clicking a Data Patch toggles its protection/monitoring
    if (tile.type === 'data_patch' && tile.qubitId !== undefined) {
      if (isT && tile.qubitId === 3) {
        setRuleAlert('RULE: Data patch q3 hosts the non-Clifford T-gate. Select your scientific interpretation in the command panel.');
        return;
      }
      onToggleQubit(tile.qubitId);
      audio.play('select');
      return;
    }

    // Clicking an Empty Routing Slot places the active tool piece
    if (tile.type === 'empty') {
      if (activeTool === 'remove') return;

      // Rule check: Sector 2 strictly enforces max 1 ancilla!
      if (mission.id === 2 && checks >= 1) {
        setRuleAlert('SPACE OVERFLOW (Sector 2): Tight physical substrate! Max 1 Ancilla allowed on this board.');
        audio.play('error');
        return;
      }

      // Rule check: Sector 4 T-gate non-Clifford commutation!
      if (isT && activeTool === 'bridge_x' && tile.connectedQubits?.includes(3)) {
        setRuleAlert('COMMUTATION VIOLATION: Non-Clifford T rotation fails to commute with X-edges (TX ≠ XT)! Only Z-checks commute (TZ = ZT).');
        audio.play('error');
        return;
      }

      if (checks >= budget.ancillas) {
        setRuleAlert(`SPACE BUDGET EXCEEDED: You have already allocated all ${budget.ancillas} Ancilla Space Tokens!`);
        audio.play('error');
        return;
      }

      // Place the piece
      audio.play('place');
      const newChecks = Math.min(budget.ancillas, checks + 1);
      onSetChecks(newChecks);

      // Connect the corresponding qubits
      if (tile.connectedQubits) {
        tile.connectedQubits.forEach((q) => {
          if (!selected.includes(q)) onToggleQubit(q);
        });
      }

      setTiles((prev) =>
        prev.map((t) => (t.id === tile.id ? { ...t, type: activeTool === 'bridge_z' ? 'ancilla_z' : 'ancilla_x' } : t))
      );
    } else if (tile.type === 'ancilla_z' || tile.type === 'ancilla_x') {
      // Reclaim / remove piece
      audio.play('remove');
      onSetChecks(Math.max(0, checks - 1));
      setTiles((prev) =>
        prev.map((t) => (t.id === tile.id ? { ...t, type: 'empty' } : t))
      );
    }
  };

  // Manual noise strike test on a specific data patch
  const triggerManualStrike = (qubitId: number, tileId: string) => {
    if (isRolling) return;
    setIsRolling(true);
    setTurnStep(1);
    setStruckTileId(tileId);
    setAlarmedAncillaId(null);
    setSimulationResult(null);
    setStrikeDescription(`Manual Test: Depolarizing noise pulse injected into Data Patch q${qubitId}!`);
    audio.play('hit');

    // Step 2: Evaluate Parity Check
    setTimeout(() => {
      const isProtected = checks > 0 && selected.includes(qubitId);
      if (isProtected) {
        // Find which bridge covers this qubit
        const coveringBridge = tiles.find(
          (t) => (t.type === 'ancilla_z' || t.type === 'ancilla_x') && t.connectedQubits?.includes(qubitId)
        );
        const fallbackId = gridSize === 3 ? 't-0-1' : gridSize === 4 ? 't-0-1' : 't-0-2';
        setAlarmedAncillaId(coveringBridge ? coveringBridge.id : fallbackId);
        audio.play('scan');
        setTurnStep(2);

        // Step 3: Post-Selection Purification
        setTimeout(() => {
          audio.play('success');
          setTurnStep(3);
          const fidelity = exact?.conditional_fidelity ? (Number(exact.conditional_fidelity) * 100).toFixed(1) : '77.5';
          const yieldPct = exact?.retention ? (Number(exact.retention) * 100).toFixed(1) : '90.4';
          const codeDistance = gridSize === 5 ? 'd=5' : 'd=3';
          setSimulationResult({
            status: 'alarm_purified',
            message: `ALARM TRIGGERED ON ANCILLA BRIDGE (${codeDistance})! Parity flip on q${qubitId} caught with syndrome s=1. Corrupted shot discarded via post-selection ➔ Purified Output Fidelity: ${fidelity}% (Yield: ${yieldPct}%).`,
          });
          setIsRolling(false);
        }, 1000);
      } else {
        // Unchecked breach
        audio.play('fail');
        setTurnStep(2);
        const baseline = exact?.baseline_fidelity ? (Number(exact.baseline_fidelity) * 100).toFixed(1) : '76.1';
        setSimulationResult({
          status: 'corrupted',
          message: `UNCHECKED DATA BREACH! Data Patch q${qubitId} had no active Ancilla Bridge monitoring its boundary on the ${gridSize}×${gridSize} lattice! Bit flip leaked into output, collapsing fidelity down to ${baseline}%.`,
        });
        setIsRolling(false);
      }
    }, 900);
  };

  // Roll Noise & Measure (Dice-driven Tabletop Turn)
  const rollNoiseRound = () => {
    if (isRolling) return;
    setIsRolling(true);
    setTurnStep(null);
    setSimulationResult(null);
    setStruckTileId(null);
    setAlarmedAncillaId(null);
    audio.play('scan');

    // Rapid dice roll animation
    let count = 0;
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 6);
      setDiceDisplay(diceFaces[rand]);
      count++;
      if (count > 8) {
        clearInterval(interval);
        // Determine final dice value (1..6)
        const finalVal = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(finalVal);
        setDiceDisplay(diceFaces[finalVal - 1]);

        // Helper to locate target tile across active grid size
        const getTileForQubit = (q: number) => {
          if (q === 0) return 't-0-0';
          if (q === 1) return gridSize === 3 ? 't-0-2' : gridSize === 4 ? 't-0-3' : 't-0-4';
          if (q === 2) return gridSize === 3 ? 't-2-0' : gridSize === 4 ? 't-3-0' : 't-4-0';
          return gridSize === 3 ? 't-2-2' : gridSize === 4 ? 't-3-3' : 't-4-4';
        };

        // Map die roll to a target data patch
        let targetQubit = 0;
        let targetTile = 't-0-0';
        let desc = '';

        if (finalVal === 1) {
          targetQubit = 0;
          targetTile = getTileForQubit(0);
          desc = `Rolled 1: Hardware bit-flip burst on Patch q0 (${targetTile})!`;
        } else if (finalVal === 2) {
          targetQubit = 1;
          targetTile = getTileForQubit(1);
          desc = `Rolled 2: Entangling gate noise on Patch q1 (${targetTile})!`;
        } else if (finalVal === 3) {
          targetQubit = mission.id === 2 ? 2 : 0;
          targetTile = getTileForQubit(targetQubit);
          desc = `Rolled 3: Thermal decoherence pulse on Patch q${targetQubit}!`;
        } else if (finalVal === 4) {
          targetQubit = 2;
          targetTile = getTileForQubit(2);
          desc = `Rolled 4: Crosstalk noise pulse on Patch q2 (${targetTile})!`;
        } else if (finalVal === 5) {
          targetQubit = isT ? 3 : 1;
          targetTile = getTileForQubit(targetQubit);
          desc = `Rolled 5: Depolarizing spike on Patch q${targetQubit}!`;
        } else {
          targetQubit = selected[0] ?? 0;
          targetTile = getTileForQubit(targetQubit);
          desc = `Rolled 6 (CRITICAL): High-frequency noise wavefront strikes Patch q${targetQubit}!`;
        }

        setStrikeDescription(desc);
        setStruckTileId(targetTile);
        setTurnStep(1);
        audio.play('hit');

        // Step 2: Ancilla Parity Evaluation
        setTimeout(() => {
          const isProtected = checks > 0 && selected.includes(targetQubit);
          if (isProtected) {
            // Find which bridge covers this qubit
            const coveringBridge = tiles.find(
              (t) => (t.type === 'ancilla_z' || t.type === 'ancilla_x') && t.connectedQubits?.includes(targetQubit)
            );
            const fallbackId = gridSize === 3 ? 't-0-1' : gridSize === 4 ? 't-0-1' : 't-0-2';
            setAlarmedAncillaId(coveringBridge ? coveringBridge.id : fallbackId);
            audio.play('scan');
            setTurnStep(2);

            // Step 3: Post-selection purify
            setTimeout(() => {
              audio.play('success');
              setTurnStep(3);
              const fidelity = exact?.conditional_fidelity ? (Number(exact.conditional_fidelity) * 100).toFixed(1) : '77.5';
              const yieldPct = exact?.retention ? (Number(exact.retention) * 100).toFixed(1) : '90.4';
              setSimulationResult({
                status: 'alarm_purified',
                message: `PARITY ALARM TRIGGERED! Ancilla caught error on q${targetQubit}. Post-selection purged corrupted shot ➔ Purified Output: ${fidelity}% Fidelity (Yield: ${yieldPct}%).`,
              });
              setIsRolling(false);
            }, 1100);
          } else {
            // Unchecked breach
            audio.play('fail');
            setTurnStep(2);
            const baseline = exact?.baseline_fidelity ? (Number(exact.baseline_fidelity) * 100).toFixed(1) : '76.1';
            setSimulationResult({
              status: 'corrupted',
              message: `UNCHECKED DATA CORRUPTION! Patch q${targetQubit} was unprotected! Error propagated through the quantum circuit, dropping fidelity down to ${baseline}%.`,
            });
            setIsRolling(false);
          }
        }, 900);
      }
    }, 80);
  };

  const clearBoard = () => {
    onSetChecks(0);
    setTiles(createTilesForGrid(gridSize, mission.id, isT));
    setSimulationResult(null);
    setStruckTileId(null);
    setAlarmedAncillaId(null);
    setRuleAlert(null);
    audio.play('select');
  };

  return (
    <div className="quantum-board-game-container">
      {/* Tabletop Top HUD */}
      <div className="board-game-header">
        <div className="board-header-left">
          <div className="game-badge">
            <Dice5 size={16} />
            <span>SURFACE-CODE TABLETOP BOARD</span>
          </div>
          <span className="board-caption">
            Litinski Rules (Quantum 2019): Place Ancilla Bridges between boundary edges to measure joint Pauli products.
          </span>
        </div>

        {/* Space-Time Tokens remaining */}
        <div className="board-resource-counters">
          <div className={`resource-chip ${checks > budget.ancillas ? 'over-budget' : ''}`}>
            <span className="chip-label">SPACE TOKENS:</span>
            <div className="token-piles">
              {Array.from({ length: budget.ancillas }).map((_, i) => (
                <span
                  key={i}
                  className={`token-coin ${i < checks ? 'used' : 'available'}`}
                  title={i < checks ? `Space Token ${i + 1} (On Board)` : `Space Token ${i + 1} (Available)`}
                >
                  🪙
                </span>
              ))}
            </div>
            <strong className="chip-value">
              {checks} / {budget.ancillas}
            </strong>
          </div>

          <div className="resource-chip">
            <span className="chip-label">TIME BUDGET:</span>
            <strong className="chip-value">
              {circuit?.depth || 24} / {budget.depth} Steps
            </strong>
          </div>
        </div>
      </div>

      {ruleAlert && (
        <div className="board-rule-alert">
          <AlertTriangle size={15} color="#ef4444" />
          <span>{ruleAlert}</span>
          <button onClick={() => setRuleAlert(null)}>Dismiss</button>
        </div>
      )}

      {/* Main Two-Column Tabletop Stage */}
      <div className="tabletop-stage">
        {/* Left Column: The Scalable Planar Board & Tactical Piece Tray */}
        <div className="tabletop-board-column">
          {/* Adaptive Lattice Scale Selector */}
          <div className="board-dimension-bar">
            <div className="dimension-bar-title">
              <Layers size={14} color="#0d9488" />
              <span>LATTICE SCALE:</span>
            </div>
            <div className="dimension-toggle-group">
              <button
                type="button"
                className={`dimension-btn ${gridSize === 3 ? 'active' : ''}`}
                onClick={() => handleGridSizeChange(3)}
                title="3×3 Minimal Surface Code: 9 tiles, distance d=3, 4 data qubits, 5 syndrome routing slots"
              >
                <span className="btn-size">3×3</span>
                <span className="btn-desc">Compact (d=3)</span>
              </button>
              <button
                type="button"
                className={`dimension-btn ${gridSize === 4 ? 'active' : ''}`}
                onClick={() => handleGridSizeChange(4)}
                title="4×4 Expanded Lattice: 16 tiles, dual-rail routing corridors, isolated ancilla buses"
              >
                <span className="btn-size">4×4</span>
                <span className="btn-desc">Tactical</span>
              </button>
              <button
                type="button"
                className={`dimension-btn ${gridSize === 5 ? 'active' : ''}`}
                onClick={() => handleGridSizeChange(5)}
                title="5×5 High-Density Surface Code: 25 tiles, distance d=5, full checkerboard plaquettes"
              >
                <span className="btn-size">5×5</span>
                <span className="btn-desc">Lattice (d=5)</span>
              </button>
            </div>
            <span className="dimension-tile-count">
              {gridSize * gridSize} Tiles · {gridSize === 3 ? 'd=3 Patch' : gridSize === 4 ? 'Dual-Rail Bus' : 'd=5 Rotated Lattice'}
            </span>
          </div>

          <div className="board-grid-wrapper">
            <div
              className="grid-axis-label-row"
              style={{ gridTemplateColumns: `24px repeat(${gridSize}, minmax(0, 1fr))` }}
            >
              <span className="axis-label corner" />
              {['A', 'B', 'C', 'D', 'E'].slice(0, gridSize).map((col) => (
                <span key={col} className="axis-label">{col}</span>
              ))}
            </div>

            <div className="grid-with-row-labels">
              <div className="grid-axis-label-col">
                {Array.from({ length: gridSize }).map((_, r) => (
                  <span key={r} className="axis-label">{r + 1}</span>
                ))}
              </div>

              {/* The Scalable Surface-Code Planar Tile Grid */}
              <div
                className={`surface-tile-grid grid-size-${gridSize}`}
                style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
              >
                {tiles.map((tile) => {
                  const isStruck = struckTileId === tile.id;
                  const isAlarmed = alarmedAncillaId === tile.id;

                  if (tile.type === 'data_patch') {
                    const q = tile.qubitId ?? 0;
                    const isMonitored = selected.includes(q);
                    const isTWire = isT && q === 3;

                    return (
                      <div
                        key={tile.id}
                        className={`grid-tile data-patch-tile ${isMonitored ? 'monitored' : ''} ${isStruck ? 'struck-by-noise' : ''}`}
                        onClick={() => handleTileClick(tile)}
                        title={`Data Patch q${q} (${tile.coord}) · Click to toggle protection`}
                      >
                        {/* Z-Boundaries (Top & Bottom, Teal) */}
                        <div className="tile-edge edge-top-z" title="Z-Boundary: measures bit-flips" />
                        <div className="tile-edge edge-bottom-z" title="Z-Boundary: measures bit-flips" />

                        {/* X-Boundaries (Left & Right, Coral) */}
                        <div className="tile-edge edge-left-x" title="X-Boundary: measures phase-flips" />
                        <div className="tile-edge edge-right-x" title="X-Boundary: measures phase-flips" />

                        {/* Top info bar: coord on left, test button on right */}
                        <div className="tile-top-bar">
                          <span className="tile-coord-badge">{tile.coord}</span>
                          <button
                            type="button"
                            className="manual-test-strike-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerManualStrike(q, tile.id);
                            }}
                            title={`Test noise pulse directly on Data Patch q${q}`}
                          >
                            ⚡ Test
                          </button>
                        </div>

                        {/* Tile Center Payload */}
                        <div className="tile-content">
                          <span className="patch-qubit-id">q{q}</span>
                          <span className="patch-role-tag">
                            {isTWire ? 'T-Gate (π/4)' : isMonitored ? '✓ MONITORED' : 'DATA PATCH'}
                          </span>
                          {tile.hasNoiseThreat && (
                            <span className="threat-indicator" title="Hardware Depolarizing Hazard">
                              ⚡ {tile.threatType}-Noise
                            </span>
                          )}
                        </div>

                        {isStruck && (
                          <div className="noise-strike-overlay">
                            <span>⚡ NOISE HIT!</span>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // Ancilla Bridge Tile
                  const isAncillaActive = tile.type === 'ancilla_z' || tile.type === 'ancilla_x';
                  const isMagicFactory = tile.stabilizerLabel === '|T⟩ Factory';
                  return (
                    <div
                      key={tile.id}
                      className={`grid-tile routing-tile ${isAncillaActive ? 'ancilla-active' : 'empty-slot'} ${isAlarmed ? 'ancilla-alarmed' : ''} ${isMagicFactory ? 'magic-factory-tile' : ''}`}
                      onClick={() => handleTileClick(tile)}
                      title={isAncillaActive ? `Click to reclaim Ancilla Bridge (${tile.coord})` : `Click to place Ancilla Bridge (${tile.coord})`}
                    >
                      <div className="tile-coord-badge">{tile.coord}</div>

                      {isAncillaActive ? (
                        <div className="ancilla-bridge-content">
                          <div className="bridge-glow-pulse" />
                          <span className="bridge-operator">{tile.stabilizerLabel || 'Z ⊗ Z'}</span>
                          <span className="bridge-label">
                            {gridSize === 5 ? (tile.type === 'ancilla_z' ? 'Z⊗Z' : 'X⊗X') : (tile.type === 'ancilla_z' ? 'Z⊗Z BRIDGE' : 'X⊗X BRIDGE')}
                          </span>
                          <small className={`bridge-status ${isAlarmed ? 'alarm' : 'clean'}`}>
                            {isAlarmed ? '🚨 ALARM' : 'CLEAN'}
                          </small>
                        </div>
                      ) : (
                        <div className="empty-slot-content">
                          <span className="plus-glyph">{isMagicFactory ? '✨' : '+'}</span>
                          <span className="slot-operator">{tile.stabilizerLabel}</span>
                          {gridSize < 5 && (
                            <span className="slot-label">{isMagicFactory ? 'MAGIC ANVIL' : 'PLACE BRIDGE'}</span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tactical Player Piece Tray / Inventory */}
          <div className="tabletop-player-tray">
            <div className="tray-header">
              <span className="tray-title">YOUR TACTICAL PIECE TRAY</span>
              <small>Click a piece below, then click any empty board slot to deploy:</small>
            </div>

            <div className="tray-tools-row">
              <button
                className={`tool-piece-btn ${activeTool === 'bridge_z' ? 'selected' : ''}`}
                onClick={() => {
                  setActiveTool('bridge_z');
                  audio.play('select');
                }}
              >
                <div className="piece-icon-box teal">
                  <Shield size={16} />
                </div>
                <div className="piece-meta">
                  <strong>Z⊗Z Bridge</strong>
                  <small>Bit-flips · 1 Space</small>
                </div>
              </button>

              <button
                className={`tool-piece-btn ${activeTool === 'bridge_x' ? 'selected' : ''}`}
                onClick={() => {
                  setActiveTool('bridge_x');
                  audio.play('select');
                }}
              >
                <div className="piece-icon-box orange">
                  <ShieldCheck size={16} />
                </div>
                <div className="piece-meta">
                  <strong>X⊗X Bridge</strong>
                  <small>Phase-flips · 1 Space</small>
                </div>
              </button>

              <button
                className={`tool-piece-btn ${activeTool === 'remove' ? 'selected' : ''}`}
                onClick={() => {
                  setActiveTool('remove');
                  audio.play('select');
                }}
              >
                <div className="piece-icon-box slate">
                  <RotateCcw size={16} />
                </div>
                <div className="piece-meta">
                  <strong>Reclaim Piece</strong>
                  <small>Refunds space</small>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Mission Command & Simulation Deck */}
        <div className="tabletop-command-column">
          {/* Mission Objective Card */}
          <div className="command-card goal-card">
            <div className="command-card-header">
              <span className="goal-badge">EPISODE OBJECTIVE</span>
              <h3>{mission.headline}</h3>
            </div>
            <p className="win-rule-box">{mission.winRule}</p>
            <p className="threat-text">
              <b>Hardware Threat:</b> {mission.threat}
            </p>
          </div>

          {/* Episode 4: Scientific Interpretation Selector */}
          {isT && onSetInterpretation && (
            <div className="command-card t-interpretation-card">
              <div className="command-card-header">
                <Dna size={16} color="#0d9488" />
                <span className="card-title">CHOOSE SCIENTIFIC INTERPRETATION</span>
              </div>
              <p className="interp-caption">
                The non-Clifford T rotation is fault-tolerant only under specific transversal/magic-state frameworks:
              </p>
              <div className="interpretation-options-list">
                {INTERPRETATIONS.map((opt) => (
                  <button
                    key={opt.value}
                    className={`interp-option-btn ${interpretation === opt.value ? 'active' : ''}`}
                    onClick={() => {
                      onSetInterpretation?.(opt.value);
                      audio.play('select');
                    }}
                  >
                    <strong>{opt.value === 'different_ideals_not_causal' ? 'Scientifically Valid Finding' : 'Alternative Hypothesis'}</strong>
                    <small>{opt.text}</small>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Turn Action Deck (Dice Roll) */}
          <div className="command-card dice-action-card">
            <div className="dice-card-header">
              <div className="dice-display-box">
                <span className="dice-glyph">{diceDisplay}</span>
              </div>
              <div className="dice-header-text">
                <strong>TEST ROUND: NOISE SIMULATOR</strong>
                <small>Roll physical hardware noise to test your placed Ancilla Bridges:</small>
              </div>
            </div>

            {strikeDescription && (
              <div className="strike-intel-callout">
                <span>{strikeDescription}</span>
              </div>
            )}

            {/* Turn Steps Progress */}
            {turnStep !== null && (
              <div className="turn-step-meter">
                <div className={`step-item ${turnStep >= 1 ? 'active' : ''}`}>
                  <span className="step-num">1</span>
                  <span>Noise Strikes</span>
                </div>
                <div className={`step-item ${turnStep >= 2 ? 'active' : ''}`}>
                  <span className="step-num">2</span>
                  <span>Parity Caught</span>
                </div>
                <div className={`step-item ${turnStep >= 3 ? 'active' : ''}`}>
                  <span className="step-num">3</span>
                  <span>Post-Selected</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="dice-buttons-row">
              <button
                className={`roll-dice-btn ${isRolling ? 'active' : ''}`}
                onClick={rollNoiseRound}
                disabled={isRolling}
              >
                <Dice5 size={18} />
                <span>{isRolling ? 'ROLLING NOISE & EVALUATING PARITIES…' : '🎲 ROLL NOISE & PLAY ROUND'}</span>
              </button>
            </div>
          </div>

          {/* Round Simulation Results Banner */}
          {simulationResult && (
            <div className={`round-results-banner ${simulationResult.status}`}>
              {simulationResult.status === 'alarm_purified' ? (
                <CheckCircle2 size={20} color="#0d9488" />
              ) : (
                <AlertTriangle size={20} color="#ef4444" />
              )}
              <div className="result-text-group">
                <strong>
                  {simulationResult.status === 'alarm_purified'
                    ? 'ROUND DEFENDED · PURIFICATION SUCCESSFUL'
                    : 'ROUND FAILED · UNCHECKED DATA BREACH'}
                </strong>
                <p>{simulationResult.message}</p>
              </div>
            </div>
          )}

          {/* Live Strategy Prediction Card */}
          <div className="command-card live-prediction-card">
            <div className="prediction-header">
              <Sparkles size={16} color="#0d9488" />
              <span>MEASURED RUN PREDICTION (AER DATA)</span>
            </div>
            {exact ? (
              <div className="prediction-grid">
                <div className="pred-item">
                  <small>ACCURACY (F)</small>
                  <strong>{(Number(exact.conditional_fidelity) * 100).toFixed(1)}%</strong>
                  <span>
                    Gain: {Number(exact.conditional_fidelity) >= Number(exact.baseline_fidelity) ? '+' : ''}
                    {((Number(exact.conditional_fidelity) - Number(exact.baseline_fidelity)) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="pred-item">
                  <small>SHOTS KEPT (r)</small>
                  <strong>{(Number(exact.retention) * 100).toFixed(1)}%</strong>
                  <span>{Math.round(shots * Number(exact.retention)).toLocaleString()} clean shots</span>
                </div>
                <div className="pred-item">
                  <small>PREDICTED SCORE</small>
                  <strong style={{ color: '#0d9488' }}>
                    {(Number(exact.conditional_fidelity) * Number(exact.retention) * 100).toFixed(1)}
                  </strong>
                  <span>Accuracy × Yield</span>
                </div>
              </div>
            ) : (
              <div className="custom-setup-note">
                <p>
                  <b>Custom Layout Deployed:</b> This specific placement will be benchmarked live via Qiskit Aer upon execution. Click <b>Auto-Win Setup</b> anytime to revert to the optimal verified strategy.
                </p>
              </div>
            )}
          </div>

          {/* Sector 4 Diagnostic: Scientific Conclusion Quiz */}
          {isT && (
            <div className="telemetry-card t-quiz-card" style={{ marginBottom: '14px' }}>
              <div className="telemetry-card-header">
                <span className="telemetry-badge" style={{ color: '#ff6b5a' }}>
                  SECTOR 4 DIAGNOSTIC · SCIENTIFIC CONCLUSION
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>RESEARCH INTERPRETATION</span>
              </div>
              <p style={{ fontSize: '12px', color: '#cbd5e1', margin: '6px 0 10px 0', lineHeight: '1.4' }}>
                Un-noised T-gates alter the output distribution, artificially increasing classical Bhattacharyya fidelity. Which research conclusion is scientifically valid?
              </p>
              <div className="interpretation-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {INTERPRETATIONS.map((o) => (
                  <button
                    key={o.value}
                    type="button"
                    className={`interpretation-btn ${interpretation === o.value ? 'selected' : ''}`}
                    onClick={() => {
                      onSetInterpretation?.(o.value);
                      audio.play('select');
                    }}
                    style={{ textAlign: 'left', cursor: 'pointer' }}
                  >
                    <div className="radio-circle">
                      {interpretation === o.value && <div className="dot" />}
                    </div>
                    <span>{o.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tabletop Mission Action Deck */}
          <div className="tabletop-action-deck">
            <div className="action-deck-row">
              {onAutoWin && (
                <button
                  className="smart-tune-btn"
                  onClick={onAutoWin}
                  disabled={suggesting}
                  title="Automatically configure an optimal strategy that wins this episode"
                >
                  <Sparkles size={14} />
                  <span>{suggesting ? 'Scanning…' : '✨ Auto-Win Setup'}</span>
                </button>
              )}

              <button className="reset-board-btn" onClick={clearBoard} title="Clear all placed pieces">
                <RotateCcw size={14} /> Clear Board
              </button>
            </div>

            <button
              className="engage-mission-btn"
              onClick={onEngage}
              disabled={isT && !interpretation}
              title={isT && !interpretation ? 'Please select a scientific conclusion above' : 'Execute quantum simulation'}
            >
              <Play size={18} fill="currentColor" />
              <span>{isT && !interpretation ? 'SELECT CONCLUSION ABOVE TO RUN' : 'LOCK IN & EXECUTE FULL RUN'}</span>
              <Zap size={16} />
            </button>
            <small className="engage-sub-hint">
              Executes circuit on Qiskit Aer, tracks physical syndrome parities, and generates debrief report.
            </small>
          </div>
        </div>
      </div>

      {/* Litinski Space-Time Strategy Guide */}
      <div className="board-game-legend">
        <div className="legend-col">
          <span className="legend-title">LITINSKI 2019 TABLETOP RULES:</span>
          <p>
            Vertical boundaries are <b>Z-edges</b> (teal). Horizontal boundaries are <b>X-edges</b> (coral).
            An ancilla placed between adjacent edges measures their joint Pauli product ($Z \otimes Z$ or $X \otimes X$).
          </p>
        </div>
        <div className="legend-col">
          <span className="legend-title">THE PROTECTION PARADOX:</span>
          <p>
            Ancillas catch hardware noise, but their 2Q entangling gates add extra physical errors!
            Deploy checks only where they provide net gain in post-selected fidelity.
          </p>
        </div>
        <div className="legend-col">
          <span className="legend-title">ADAPTIVE LATTICE SCALING:</span>
          <p>
            Select <b>3×3 Compact</b> (minimal distance-3 patch), <b>4×4 Tactical</b> (dual-rail routing corridors),
            or <b>5×5 Full Lattice</b> (canonical distance-5 code with 25 stabilizer plaquettes).
          </p>
        </div>
      </div>
    </div>
  );
}
