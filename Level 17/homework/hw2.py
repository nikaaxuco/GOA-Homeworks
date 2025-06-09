
numbers = []


num = int(input("შეიყვანეთ რიცხვი: "))

numbers.append(num)

while True:
    try:
        num = int(input("შეიყვანეთ სხვა რიცხვი (შესაწყვეტად დააჭირეთ Enter): "))
        numbers.append(num)
    except ValueError:
        break

print(f"თქვენ შეიყვანეთ {len(numbers)} რიცხვი")
