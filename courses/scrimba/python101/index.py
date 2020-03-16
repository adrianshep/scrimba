
# Print Statement and Program Flow

print("Create hammer")
print("Create nails")
print("Use hammer and nails")

##############################

# Variables

failed_subjects="2"
name='John'
print('Dear Mrs Badger')
print('Your son ' + name + ' is failing ' + failed_subjects + ' subjects.')
print(name + '  will need to redo ' + failed_subjects + '  courses.')
name="Eric"
print(name + '  is doing well in geography.')

##############################

# Data Types and Type Casting

a = int(1)        # a will be 1
b = int(2.5)      # b will be 2
c = int("3")      # c will be 3
c1 = int(float("3.4"))   # c1 will be...
d = float(1)      # d will be 1.0
e = float(2.5)    # e will be 2.5
f = float("3")    # f will be 3.0
g = float("4.23") # g will be 4.23
h = str("80s")    # h will be '80s'
i = str(22)       # i will be '22'
j = str(3.01)     # j will be '3.01'

print([a,b,c,c1,d,e,f,g,h,i,j])

##############################

# Variables and Data Types Exercise

print('Variables & Datatypes - Exercise')
#Create appropriate Variables for Item name, the price 
#and how many you have in stock

item_name = 'string'
price = 1.29
inventory = 28
is_in_inventory = True
print(item_name, price, inventory)

##############################

# Arithmetic Operations

a=10
b=3
print('Addition : ', a + b)
print('Subtraction : ', a - b)
print('Multiplication : ', a * b)
print('Division (float) : ', a / b)
print('Division (floor) : ', a // b)
print('Modulus : ', a % b)
print('Exponent : ', a ** b)

##############################

# Strings - Basics - Slicing

msg='welcome to it\'s Python 101: Strings'
print(msg)
print(msg.upper())
print(msg.lower())
print(msg.capitalize())
print(msg.title())

print(len(msg))
# count is case-sensitive:
print(msg.count('Python'))

# slicing
print(msg[5])
# will give last character:
print(msg[-1])
# grab everything after 2 (inclusive); exclusive of last index number
print(msg[2:7])
# assumes everything from zero up to 7:
print(msg[:7])