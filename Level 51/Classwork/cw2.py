
def printer_error(s):
    errors = 0
    for char in s:
        if char > 'm':
            errors += 1
    return f"{errors}/{len(s)}"


