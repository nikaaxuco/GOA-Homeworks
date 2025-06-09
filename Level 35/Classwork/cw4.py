







def search(text, word):
    if word in text:
        return True
    return False

text = input("Enter text: ")
word = input("Enter word to search: ")

if search(text, word):
    print("Word found")
else:
    print("Word not found")

