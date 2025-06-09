
year = int(input("შეიყვანეთ წელი: "))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("ეს წელი არის ნაკიანი")
else:
    print("ეს წელი არ არის ნაკიანი")
