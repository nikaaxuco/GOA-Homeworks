
def calculate_tip():
            bill = float(input("Enter the bill amount: $"))
            tip = bill * 0.2
            total = bill + tip
            print(f"Bill: ${bill}")
            print(f"Tip: ${tip}")
            print(f"Total: ${total}")

if __name__ == "__main__":
            calculate_tip()

            
