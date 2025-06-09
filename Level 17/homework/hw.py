

user_numbers = []

while True:
    user_input = input("შეიყვანეთ რიცხვი (Enter დასასრულებლად): ")
    
    if user_input == "":
        break
        
    user_numbers.append(float(user_input))



has_greater_than_ten = False

for number in user_numbers:

    if number > 10:

        has_greater_than_ten = True
        break

if has_greater_than_ten:
    print("სიაში არის 10-ზე მეტი რიცხვი")
else:
    print("სიაში 10-ზე მეტი რიცხვი არ არის")

print("თქვენი სია:", user_numbers)


print("სიის ელემენტების ჯამი:", sum(user_numbers))
