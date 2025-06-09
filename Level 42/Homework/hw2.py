
def update_light(current):
    light_sequence = {
        'green': 'yellow',
        'yellow': 'red',
        'red': 'green'
    }
    return light_sequence[current]
