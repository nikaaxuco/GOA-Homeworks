
i = 1
sum = 0
count = 0

while i <= 100:
    if i % 2 == 0:
        sum += i
        count += 1
    i += 1

average = sum / count
print(average)

