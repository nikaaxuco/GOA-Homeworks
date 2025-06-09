




def count_positives_sum_negatives(arr):
    if arr == []:
        return []
    
    count_positive = 0
    sum_negative = 0
    
    for number in arr:
        if number > 0:
            count_positive = count_positive + 1
        if number < 0:
            sum_negative = sum_negative + number
    
    return [count_positive, sum_negative]

