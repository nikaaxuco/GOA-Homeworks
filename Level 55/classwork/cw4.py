
def validate_password(password):
    if len(password) < 8:
        return False
        
    has_upper = False
    has_lower = False
    has_number = False
    
    for char in password:
        if char.isupper():
            has_upper = True
        elif char.islower():
            has_lower = True
        elif char.isdigit():
            has_number = True
            
    return has_upper and has_lower and has_number
