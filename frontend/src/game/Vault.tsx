import { ArrowLeft, Database } from 'lucide-react';
import ResearchLab from '../ResearchLab';

export default function Vault({ mission, onBack }: { mission: number; onBack: () => void }) {
  return (
    <div className="vault-root">
      <header className="vault-header">
        <button className="ghost" onClick={onBack}><ArrowLeft size={16} /> SECTOR MAP</button>
        <div className="vault-title"><Database size={18} /><div><small>SCIENCE VAULT</small><strong>Research bench · real circuit, real measurements</strong></div></div>
        <span className="vault-tag">qiskit-paulice · Aer · no fabricated scores</span>
      </header>
      <div className="vault-body">
        <ResearchLab initialMission={mission} onReturn={onBack} />
      </div>
    </div>
  );
}
