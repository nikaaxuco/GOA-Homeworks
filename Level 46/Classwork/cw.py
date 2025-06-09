def repeats(arr):
        nums = []
        for i in arr:
            count = arr.count(i)
            if count == 1:
                nums.append(i)
        result = 0
        for num in nums:
            result = result + num
        return result