

age = int(input("შეიყვანეთ თქვენი ასაკი: "))

if age < 13:
    status = "მცირეწლოვანი"
elif 13 <= age <= 19:
    status = "მოზარდი"
else:
    status = "ზრდასრული"

print("თქვენ ხართ:", status)
