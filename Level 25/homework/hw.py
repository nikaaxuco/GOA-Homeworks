
print("მოიფიქრეთ რიცხვი 1-დან 100-მდე")
number = int(input("შეიყვანეთ რიცხვი: "))

attempts = 3
while attempts > 0:
    guess = int(input(f"გამოვიცნობ რიცხვს (დარჩენილი მცდელობები: {attempts}): "))
    
    if guess == number:
        print("სწორია")
        break
    elif guess > number:
        print("მაღალი")
    else:
        print("დაბალი")
        
    attempts -= 1
    
if attempts == 0 and guess != number:
    print(f"სამწუხაროდ ვერ გამოვიცანი, თქვენი რიცხვი იყო {number}")
