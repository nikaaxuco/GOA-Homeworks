
def nb_year(p0, percent, aug, p):
    years = 0
    current_population = p0
    
    while current_population < p:
        current_population = int(current_population + (current_population * percent/100) + aug)
        years += 1
        
    return years
