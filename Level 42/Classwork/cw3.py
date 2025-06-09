def replace_exclamation(sentence):
      vowels = "aeiouAEIOU"
      result = ""
      for char in sentence:
          if char in vowels:
              result += "!"
          else:
              result += char
      return result


text = "Hello World! How are you?"
print(replace_exclamation(text))

