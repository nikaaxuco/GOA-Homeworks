def open_or_senior(data):
    result = []
    for member in data:
        Age = member[0]
        handicap = member[1]
        
        if Age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
            
    return result


