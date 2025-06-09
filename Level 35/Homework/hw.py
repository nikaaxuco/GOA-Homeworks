name = "Giorgi"
age = 25
height = 1.75
is_student = True

print(f"Name: {name}, Age: {age}, Height: {height}m, Student: {is_student}")

fruits = ["apple", "banana", "orange"]
fruits.append("grape")
fruits.remove("banana")

coordinates = (41.7151, 44.8271)
x, y = coordinates

numbers = {1, 2, 3, 4, 5}
more_numbers = {4, 5, 6, 7, 8}
print("Union:", numbers | more_numbers)
print("Intersection:", numbers & more_numbers)

person = {
    "name": "Nino",
    "age": 30,
    "city": "Tbilisi"
}
person["occupation"] = "Developer"

score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

sum_numbers = 0
for i in range(1, 11):
    sum_numbers += i
print("Sum of numbers 1-10:", sum_numbers)

countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1

def calculate_rectangle_area(length, width):
    return length * width

def is_palindrome(text):
    return text.lower() == text.lower()[::-1]

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
