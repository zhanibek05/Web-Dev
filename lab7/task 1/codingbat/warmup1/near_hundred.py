def near_hundred(n):
    if (n >= 90 and n <= 110) or (n >= 190 and n <= 210):
        return True
    return False
print(near_hundred(int(input())))