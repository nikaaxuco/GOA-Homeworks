
number = float(input("შეიყვანეთ რიცხვი: "))

while True:
    if number > 0:
        print("რიცხვი არის დადებითი")
        break
    elif number < 0:
        print("რიცხვი არის უარყოფითი")
        break
    else:
        print("რიცხვი არის ნული")
        break
