
def row_sum_odd_numbers(n):

    first = n * n - (n - 1)
    return sum(range(first, first + 2*n, 2))
