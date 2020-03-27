
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

##############################

# Strings - Basics - Slicing - Exercise

# from msg string, extract text and print new string that says "1 Welcome Ring To Tyler" (every first letter in a word should be capitalized in title format)
# print the same string backwards (look up in documentation)

msg='welcome to Python 101: Strings'

msg_1=msg[-10]
msg_w=msg[0:7]
msg_ring=msg[-5:-1]
msg_to=msg[8:10]
msg_t=msg[8]
msg_y=msg[12]
msg_l=msg[2]
msg_e=msg[1]
msg_r=msg[-5]
msg_tyler=msg_t+msg_y+msg_l+msg_e+msg_r
msg_complete=msg_1+' '+msg_w+' '+msg_ring+' '+msg_to+' '+msg_tyler
msg_complete=msg_complete.title()
msg_reverse=msg_complete[::-1]

print(msg_complete)
print(msg_reverse)
 
# Olof's solution:
# slicing to include space before or after when available:
msg1=msg[18]+' '+msg[:8]+msg[25:29]+msg[7:11]+msg[13]+msg[12]+msg[2]+msg[1]+msg[-5]  
print(msg1.title())
print(msg1[::-1].title())

##############################

# Strings - 2 - Find, Replace, String Formatting

# to get a multiline string:
msg="""Dear Terry,
You must cut down the mightiest 
tree in the forest with…
a herring! <3"""
print(msg)

# find:
msg='Welcome to Python 101: Strings'
print(msg.find('h'))
print(msg.find('Python'))
# returns index of character (14 and 11 (start position) in these examples)

# replace:
print(msg.replace('Python','C'))
msg1=msg.replace('Python','C')
print(msg1)
# strings are immutable once created, so must be set to a new variable to be changed

# membership:
msg='Welcome to Python 101: Strings'
print('Python' in msg)
print('Python' not in msg)
# checks if it exists, returns boolean

# formatting
name='TERRY'
color = 'RED'
msg = '[' + name + '] loves the color ' + color.lower() + '!'
# easier format to read and follow:
msg1 = f'[{name}] loves the color {color.lower()}!'
print(msg)
print(msg1)

# exercise - capitalize name "Terry":
msg1 = f'[{name.capitalize()}] loves the color {color.lower()}!'

##############################

# User Input

name=input('What is your name?: ')
age=input('What is your age?: ')
print('Hello '+ name + '! You are '+ age + ' years old.')

# calculator:
num1=input('Enter a digit: ')
num2=input('Enter a second digit: ')
answer=float(num1)+float(num2)
print(answer)


##############################

# User Input - Exercise

# - Create a distance converter converting Km to miles
# - Take two inputs from user: Their first name and the distance in km
# - Print: Greet user by name and show km, and mile values
# - 1 mile is 1.609 kilometers
# - hint: use correct types for calculating and print
# - Did you capitalize the name

# my solution:

fname=input('Enter your first name: ')
kdist=input('Enter your distance in kilometers: ')
mdist=(float(kdist)/1.609)
msg=f'Hi, {fname.capitalize()}, you ran {kdist} kilometers, which is {mdist} miles.'
print(msg)

# Olof's solution:

name = input ('Enter your name: ')
distance_km = input('Enter distance in km: ')
distance_mi = float(distanc_km)/1.609
print(f'Hi {name.title()}! {distance_km} km is equivalent to {round(distance_mi, 1)} miles.')

##############################

# Lists - Basics

friends = ['John','Michael','Terry','Eric','Graham']
print(friends)
# Michael
print(friends[1])
# Michael Graham
print(friends[1],friends[4])
# Graham
print(friends[-1])
# slicing syntax - Terry, Eric
print(friends[2:4])
# John, Michael, Terry, Eric
print(friends[:4])
# the whole list
print(friends[:])
# number of elements in the list
print(len(friends))
# index of list item
print(friends.index('Eric'))
# count items
print(friends.count('Eric'))

##############################

# Lists - Continued

friends = ['John','Michael','Terry','Eric','Graham']
cars = [911,130,328,535,740,308]
print(friends)
# sort in ascending alphabetical order:
friends.sort()
print(friends)
cars.sort()
print(cars)
# sort in descending alphabetical order; capital T in True needed for it to be read as a boolean:
friends.sort(reverse=True)
print(friends)
# reverse function only reverses original string
friends.reverse()
print(friends)
# minimum, maximum, sum
# lowest number or word (by letter) in list:
print(min(cars))
print(min(friends))
# highest number or word (by letter) in list:
print(max(cars))
print(max(friends))
# summing
print(sum(cars))


# modifying lists
# add to list
friends.append('TerryG')
# specify position at which to insert
friends.insert(1,'TerryG')
# replace 'Terry' with 'TerryG':
friends[2]='TerryG'
# add cars list to end of friends list
friends.extend(cars)
# remove from list
friends.remove('Terry')
# pops last name from the array and into memory:
friends.pop()
# pops from index
friends.pop(2)
# empties list
friends.clear()
# delete list entirely
del friends
# delete index 2 in list
del friends[2]
print(friends)

# copy lists
# create a new list
new_friends = friends[:]
# will do same thing as above:
new_friends = friends.copy()
# third way
new_friends = list(friends)
print(new_friends)

##############################

# Lists - Exercise

# my solution

# You sell lemonade over two weeks; lists show number of lemonades sold per week
# Profit from each lemonade sold = $1.50

sales_w1 = [7,3,42,19,15,35,9]
sales_w2 = [12,4,26,10,7,28]
sales = []

# Add another day to week 2 list by capturing numbers as an input
sales_w2.append(10)
# Combine the two lists into the list called 'sales'
sales_w1.extend(sales_w2)
sales = sales_w1
# Calculate/print how much you've earned on:
# Best day
best_day_sales = max(sales)
best_day_earn = (best_day_sales * 1.50)
print(f'Best day earnings: ${best_day_earn:.2f}')
# Worst day
worst_day_sales = min(sales)
worst_day_earn = (worst_day_sales * 1.50)
print(f'Worst day earnings: ${worst_day_earn:.2f}')
# Separately and in total
total_earn = sum(sales)*1.50
print(f'Total earnings: ${total_earn:.2f}')

# Olof's solution

new_day = input('Enter #of lemonades for new day: ')
# all input captured is in form of a string, so you have to convert it by using int:
sales_w2.append(int(new_day))
sales.extend(sales_w1)
sales.extend(sales_w2)
# this method allows all extending on one line, so more efficient:
# sales = sales_w1 + sales_w2
#sales.sort()
worst_day_prof = min(sales) * 1.5
best_day_prof = max(sales) * 1.5
# alternative with more steps:
# sales.sort()
# worst_day_prof = sales[0] * 1.5
# best_day_prof = sales[-1] * 1.5
print(f'Worst day profit:$ {worst_day_prof}')
print(f'Best day profit:$ {best_day_prof}')
print(f'Combined profit:$ {worst_day_prof + best_day_prof}')
