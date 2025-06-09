                                                                                 


# სხვადასხვა მონაცემთა ტიპის ცვლადები
var1 = 10            # integer
var2 = 3.14          # float
var3 = "Hello"       # string
var4 = True          # boolean
var5 = [1, 2, 3]     # list



# შედარების ოპერატორები
print(5 > 3)       # True
print(10 < 15)     # True
print(7 == 7)      # True
print(8 != 5)      # True
print(12 >= 12)    # True
print(6 <= 10)     # True


# and და or ოპერატორები
print(5 > 3 and 10 > 5)        # True
print(7 > 8 or 3 < 4)          # True
print(5 == 5 and 6 != 6)       # False
print(3 < 2 or 4 > 1)          # True
print(10 >= 10 and 2 <= 3)     # True


# მომხმარებლის ასაკის შემოტანა და ტიპის შეცვლა
age = input("შეიყვანეთ თქვენი ასაკი: ")
print("ტიპი სტრინგად:", type(age))

# ტიპის შეცვლა integer-ად
age = int(age)
print("ტიპი integer-ად:", type(age))

# ტიპის შეცვლა float-ად
age = float(age)
print("ტიპი float-ად:", type(age))


# მომხმარებლის სახელისა და პაროლის შემოტანა
username_input = input("შეიყვანეთ სახელი: ")
password_input = input("შეიყვანეთ პაროლი: ")

# წინასწარ განსაზღვრული სახელი და პაროლი
username = "admin"
password = "1234"


# კონკატენაცია ნიშნავს ტექსტის ერთმანეთზე შეყვანას, 
# ანუ სტრიქონების გაერთიანებას. მაგალითად,
#  თუ გვაქვს ორი სტრიქონი "გამარჯობა" და "მსოფლიო", 
# მათი კონკატენაციის შედეგად მივიღებთ "გამარჯობა მსოფლიო".
#  Python-ში სტრიქონების კონკატენაციისთვის გამოიყენება + ოპერატორი.