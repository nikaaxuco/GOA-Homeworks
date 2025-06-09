




def calculate_bmi():
        print("BMI Calculator")
        print("-" * 20)
    
      
        weight = float(input("Enter your weight in kg: "))
        height = float(input("Enter your height in meters: "))



        bmi = weight / (height * height)
  

        if bmi < 18.5:
            category = "Underweight"
        elif bmi < 25:
            category = "Normal weight"
        elif bmi < 30:
            category = "Overweight"
        else:
            category = "Obese"
    
        
        print("Results:")
        print(f"Your BMI is: {bmi}")
        print(f"Category: {category}")



        if __name__ == "__main__":
                calculate_bmi()



