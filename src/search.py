"""Deterministic, bounded enumeration of ordered target-subset candidates.

These are *target orders*, not every possible physical Pauli check pattern.
Actual checks must be created and verified by qiskit-paulice.
"""
from __future__ import annotations
import itertools
import math


def candidate_orders(n: int, max_checks: int, max_orders: int, exhaustive=False):
    if not 2 <= n <= 10 or max_checks < 1 or max_orders < 1:
        raise ValueError('invalid qubit count, check cap or search budget')
    limit = min(n, max_checks)
    total = sum(math.perm(n,k) for k in range(1,limit+1))
    if exhaustive and total>100000:
        raise ValueError(f'exhaustive search would require {total} candidate target orders; narrow the search')
    by_length = [itertools.permutations(range(n), k) for k in range(1,limit+1)]
    chosen = []
    if exhaustive:
        for group in by_length:
            chosen.extend(group)
    else:
        # Round-robin: each check count gets coverage before expanding any one count.
        for group in itertools.zip_longest(*by_length):
            for candidate in group:
                if candidate is not None:
                    chosen.append(candidate)
                    if len(chosen) >= max_orders:
                        break
            if len(chosen) >= max_orders:
                break
    return chosen, {'evaluated_order_count':len(chosen),
                    'candidate_order_count':total,
                    'complete_order_enumeration':len(chosen)==total}
