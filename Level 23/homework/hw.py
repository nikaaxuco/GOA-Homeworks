
def my_info():
    name = "nika"
    surname = "xucishvili"
    age = 14
    country = "Georgia"
    city = "Rustavi"
    hobby = "programming"
    favorite_sport = "basketball"
    favorite_food = "carbonara"
    
    info_sentence = f"My name is {name} {surname}, I am {age} years old, I live in {city}, {country}. " \
                    f"My favorite hobby is {hobby}, I love playing {favorite_sport} and my favorite food is {favorite_food}."
    
    return info_sentence

print(my_info())
