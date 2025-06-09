
def cat_mouse(x):

    dots = x.count('.')
    

    if dots > 3:
        return "Escaped!"
    else:
        return "Caught!"
