from src.search import candidate_orders


def test_balanced_budget_covers_each_check_count():
    orders, metadata = candidate_orders(4, 4, 8)
    assert len(orders) == 8
    assert set(len(o) for o in orders) == {1,2,3,4}
    assert not metadata['complete_order_enumeration']
    assert metadata['candidate_order_count'] == 64


def test_exhaustive_count_covers_all_orders():
    orders, metadata = candidate_orders(3, 2, 1, exhaustive=True)
    assert len(orders) == 9
    assert metadata['complete_order_enumeration']
    assert len(set(orders)) == len(orders)
