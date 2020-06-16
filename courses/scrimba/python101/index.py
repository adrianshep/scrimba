
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
msg-one = f'[{name}] loves the color {color.lower()}!'
print(msg)
print(msg-one)

# exercise - capitalize name "Terry":
msg-one = f'[{name.capitalize()}] loves the color {color.lower()}!'

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

##############################

# Split and Join

# split
msg ='Welcome to Python 101: Split and Join'
csv = 'Eric,John,Michael,Terry,Graham'
friends_list = ['Eric','John','Michael','Terry','Graham']
print('Welcome to Python 101: Split and Join')
# list command breaks apart msg completely, into characters:
print(list(msg))
# when you split from a string, you're creating a list
# split is a method on the string object, breaks message into words:
print(msg.split())
# splits csv file into a list
print(csv.split(','))

# join
# joins with hyphens
print(''-.join(friends_list)
# splitting out all spaces in string
print(''.join(msg.split()))
# do the same thing with this:
print(msg.replace(' ', ''))

##############################

# Split and Join - Exercise

csv = 'Eric,John,Michael,Terry,Graham:TerryG;Brian'
friends_list = ['Exercise: fill me with names']
print(friends_list)
# From the list above fill a list(friends_list) properly
# with the names of all the friends. One per "slot"
# you may need to run same command several times
# use print() statements to work your way through the exercise

# my solution:

friends_list = csv.split(',')
print(friends_list)
friends_list_comma = friends_list[0:4]
print(friends_list_comma)
friends_list_tail = friends_list[4]
print(friends_list_tail)
friends_list_tail = friends_list_tail.split(':')
print(friends_list_tail)
friends_list_colon = friends_list_tail[0].split()
print(friends_list_colon)
friends_list_semi = friends_list_tail[1]
print(friends_list_semi)
friends_list_semi = friends_list_semi.split(';')
print(friends_list_semi)
friends_list = friends_list_comma + friends_list_colon + friends_list_semi
print(friends_list)

# Olof's solution

# 1st solution by stages:
print(','.join(csv.split(';')))
print(','.join(csv.split(';')).split(':'))
print(','.join(','.join(csv.split(';')).split(':')))
print((','.join(','.join(csv.split(';')).split(':'))).split(','))

# final version of 1st solution:
friends_list = (','.join(','.join(csv.split(';')).split(':'))).split(',')
print(friends_list)

# 2nd solution:
print('replace', csv.replace(';',',').replace(':',',').split(','))

##############################

# Tuples

# tuples are faster Lists you can't change, they're immutable - have to create new one to make any changes
# come in regular parentheses
# can't use append, pop, etc. on tuples
# use tuples when you have data you don't want or need to change
friends = ['John','Michael','Terry','Eric','Graham']
friends_tuple = ('John','Michael','Terry','Eric','Graham')
print(friends)
print(friends_tuple)
print(friends[2:4])
print(friends_tuple[2:4])

##############################

# Sets

# Sets - blazingly fast unordered Lists 
# unordered, removes any duplicates inside
# use curly brackets

friends = ['John','Michael','Terry','Eric','Graham']
friends_tuple = ('John','Michael','Terry','Eric','Graham')
friends_set = {'John','Michael','Terry','Eric','Graham','Eric'}
print(friends)
print(friends_tuple)
# last 'Eric' removed:
print(friends_set)

# uses:
friends_set = {'John','Michael','Terry','Eric','Graham','Eric'}
my_friends_set = {'Reg','Loretta','Colin','Eric','Graham'}

# prints {'Eric', 'Graham'} :
print(friends_set.intersection(my_friends_set))

# prints {'John', 'Michael', 'Terry'} :
print(friends_set.difference(my_friends_set))

# prints {'John', 'Michael', 'Terry', 'Eric', 'Graham', 'Reg', 'Loretta', 'Colin'} :
 print(friends.union(my_friends))

#empty Lists
empty_list = []
empyt_list = list()

#empty Tuple
empty_tuple = ()
empty_tuple = tuple()

#empty Set
empty_set = {} # this is wrong, this is a dictionary
empty_set = set()

##############################

# Sets - Exercise

friends = {'John','Michael','Terry','Eric','Graham'}
my_friends = {'Reg','Loretta','Colin','John','Graham'}
cars =['900','420','V70','911','996','V90','911','911','S','328','900']

#1. Check if ‘Eric’ and ‘John’ exist in friends
# my solution
print('Eric' in friends)
print('John' in friends)
# Olof's solution
print('Eric' in friends and 'John' in friends)

#2. combine or add the two sets 
# my solution
print(friends.union(my_friends))
# Olof's solution
print(friends.union(my_friends))
# alternate - single pipe means union
print(friends | my_friends)

#3. Find names that are in both sets
# my solution
print(friends.intersection(my_friends))
# Olof's solution
print(friends.intersection(my_friends))
# alternate - single ampersand means intersection
print(friends & my_friends)

#4. find names that are only in friends
# my solution
print(friends.difference(my_friends))
# Olof's solution
print(friends.difference(my_friends))
# alternate - minus sign - subtract second set from first
print(friends - my_friends)

#5. Show only the names who only appear in one of the lists
# my solution
print((friends - my_friends) | (my_friends - friends))

# Olof's solution
# there's a method for this:
print(my_friends.symmetric_difference(friends))
# alternate - caret sign applies symmetric_difference method
print(my_friends ^ friends)

#6. Create a new cars-list without duplicates
# my solution
cars_nodupes = set(cars)
print(cars_nodupes)

# Olof's solution
cars_no_dupl = set(cars)
print(cars_no_dupl)
# and to turn it back into a list
cars_no_dupl = list(set(cars))
print(cars_no_dupl)

##############################

# Comments

print("#Comments")
#Hiding in the comments
# more comments

# multiline hack for comments:
'''
Nobody expects the 
spanish inquisition
'''

#fruits holds the fruits input by user as strings
fruits = [‘apple’,’orange’,’banana’,’avocado’]

#Entry form for Ministry applications
# (example of comments used in coding workflow)
#to-do: fix it! it doesn’t work  
name = "Default"
name = input("Enter your silly name: ")
print("Thank you " + name + "!")
print("for applying to")
print("the Minstry of Silly Walks")

##############################

# Functions - Calling, Parameters, Arguments, Defaults

# age is set to a default value of 28
def greeting(name, age=28):
    print("Hello " + name + ", you are " + str(age) + "!")
    # don't have to do a string conversion using formatted strings:
    print(f"Hello, {name}, you are age {age}!")

name = input("Enter your name: ")
greeting("Brian", 32)
greeting("Judith")

##############################

# Functions - Exercise

# my solution:

def greeting(name, age=28, color='red'):
    #Greets user with 'name' from 'input box' and 'age', if available, default age is used
    age = int(age) + 1
    print('Hello, '  +  name.title() + ', you will be ' +  str(age) + ' years old next birthday!')
    print(f'Hello, {name.title()}, you will be {age} years old next birthday!')

    print('We hear you like the color ' + str(color.lower()) + '.')
    print(f'We hear you like the color {color.lower()}.')

name = input('Enter your name: ')
age = input('Enter your age: ')
color = input('Enter a color you like: ')
greeting(name, color, age)
# 1. Add new print statement - on a new line
#    which says 'We hear you like the color xxx! xxx is a string with color 
# 2. extend the function with another  input parameter 'color', that defaults to 'red'
# 3. Capture the color via an input box as variable:color 
# 4. Change the 'You are xx!' text to say 'you will be xx+1 years old next birthday 
#  adding 1 to the age
# 5. Capitalize first letter of the 'name', and rest are small caps 
# 6. Favorite color should be in lowercase 

# Olof's solution:

def greeting(name, age=28, color = 'red'):
    #Greets user with 'name' from 'input box' and 'age' next year, if available, default age is used
    # also includes favorite color
    print('Hello '  +  name.capitalize() + ', you will be ' + str(age+1) +' next birthday!')
    print(f'Hello {name.capitalize()}, you will be {age+1} next birthday!')
    print(f'We hear you like the color {color.lower()}!')

name = input('Enter your name: ')
age = input('Enter your age: ')
color = input('Enter favorite color: ')
greeting(name, int(age), color)

##############################

# Functions - Named Notation

def greeting(name, age=28, color="red"):
 #Greets user with “name” from “input box” and “age”, if unavailable, default age is used   
   
   print(f"Hello {name.capitalize()}, you will be {age+1} next birthday!")
   print(f"We hear you like the color {color.lower()}!")

# with named notation, order of arguments no longer matters:
greeting(age=27, name="brian",color="Blue")

# named notation also clarifies to what argument each value attaches:
Profile(yob=1995,weight=83.5,height=192,eye_color="blue")

##############################

# Return Statements

def value_added_tax(amount):
    tax = amount * 0.25
    # without return, function will return empty object:
    return tax
    
print(value_added_tax(100))

def value_added_tax(amount):
    tax = amount * 0.25
    total_amount = amount * 1.25
    return tax
    
price = value_added_tax(100)    
print(price)

# what are we getting back?

# type is a float
print(price, type(price))

# we get back a tuple
def value_added_tax(amount):
    tax = amount * 0.25
    total_amount = amount * 1.25
    return amount, tax, total_amount
    
price = value_added_tax(100)    
print(price, type(price))

# we can get back part of a list by using square brackets and specifying index of item:
def value_added_tax(amount):
    tax = amount * 0.25
    total_amount = amount * 1.25
    return [amount, tax, total_amount]
    
price = value_added_tax(100)    
print(price[1], type(price))

# we can get back a set:
    return {amount, tax, total_amount}

# we can get back a string:
    return f"{amount}, {tax}, {total_amount}"

##############################

# Comparisons and Booleans

# Comparisons

a = 7
b = 3
# asking if a is equal to b
print(a == b)
# is a not equal to b?
print(a != b)
# is a greater than b?
print(a > b)
# is a less than b?
print(a < b)
# is a less than or equal to b?
print(a <= b)
# is a greater than or equal to b?
print(a >= b)
# 'in' operator querying membership
# does 'o' appear in 'John'?
print('o' in 'John')
# does 'o' NOT appear in 'John'?
print('o' not in 'John')

# identity
a = [3,7,42]
b = a
print(a == b)
# are they identical objects occupying the same amount of memory space?
print(a is b)
# check that with the id statement:
print(id(a), id(b))
# if b is rewritten:
# same in value, but NOT same in memory:
a = [3,7,42]
b = [3,7,42]
print(a == b)
print(a is b) # is false
print(id(a), id(b)) # ids are 2 3 and not 2 2

a=7
b=3
print('a == b is', a == b)
print('a != b is', a != b)
print('a > b is', a > b)
print('a < b is', a < b)
print('a >= b is', a >= b)
print('a <= b is', a <= b)
print('o in John is ','o' in 'John') #membership
print('o in John is ','o' not in 'John') #non membership
print('John is John ','John' is 'John') #identity
print('John is not John is ','John' is not 'John') # negative identity

# Booleans

# int out of boolean
print(int(True))  # evaluates to 1
print(int(False)) # evaluates to 0

# values to booleans
# strings
print(bool('Parrot')) # evaluates to True
print(bool(' ')) # space evaluates to True
print(bool('')) # empty string evaluates to False
# numbers
print(bool(42)) # evaluates to True
print(bool(1)) # evaluates to True
print(bool(0)) # evaluates to False
# empty objects and zeroes evaluate to False

# lists
print(bool([1,2])) # evaluates to True
print(bool([0])) # evaluates to False
# all trivial values evaluate to 0, non-trivial to 1

# booleans can be converted to 1 and 0
print(42 + True) # evaluates to 43
print(42 + False) # evaluates to 42

##############################

# Conditionals - If, Else, Elif

is_raining = False
is_cold = False
print("Good Morning")
if is_raining and is_cold:
    print("Bring Umbrella and jacket")
elif is_raining and not(is_cold):
    print("Bring Umbrella")
elif not(is_raining) and is_cold:
    print("Bring Jacket")
else:
    print("Shirt is fine!")

# with numbers

amount = 51
if amount <= 50:
    print("Purchase approved")
else:
    print("Please enter your pin!")

##############################

# Conditionals - If, Else, Elif - Exercise

print('if elif else - Exercise')
# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs 
# Bonus: Extend functionality with extra mode so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f

# my solution:

num1=input('Enter your first number or celsius temperature: ')
num2=input('Enter your second number: ')
operand=input('Enter your operand (+, -, *, /, f): ')
if (operand == '+'):
  print(int(num1) + int(num2))
elif (operand == '-'):
  print(int(num1) - int(num2))
elif (operand == '*'):
  print(int(num1) * int(num2))
elif (operand == 'f'):
  print(int(num1) * (9/5) + 32)
else:
  print(int(num1) / int(num2))

# my solution to add bonus functionality:

num1=input('Enter your first number: ')
num2=input('Enter your second number: ')
operand=input('Enter your operand or f to convert to Fahrenheit (+, -, *, /, f): ')
if (operand == '+'):
  print(int(num1) + int(num2))
elif (operand == '-'):
  print(int(num1) - int(num2))
elif (operand == '*'):
  print(int(num1) * int(num2))
elif (operand == 'f'):
  print(num1, 'degrees Celsius converts to ', int(num1) * (9/5) + 32, ' degrees Fahrenheit.')
else:
  print(int(num1) / int(num2))

  # Olof's solution:

  # using elifs, program only checks until it finds something correct at which point it exits

mode = input('Enter math operation(+,-,*,/) or f for Celsius to Fahrenheit conversion: ')
num1 = float(input('Enter first number: '))
# the below if statement prevents num2 input appearing if user only wants C to F conversion:
if mode.lower() == 'f':
    print(f'{num1} Celsius is equivalent to {(num1*9/5)+32 } fahrenheit')
else:
    num2 = float(input('Enter second number: '))

    if mode == '+':
        print(f'Answer is: {num1 + num2}')
    elif mode == '-':
        print(f'Answer is: {num1 - num2}')
    elif mode == '*':
        print(f'Answer is: {num1 * num2}')
    elif mode == '/':
        print(f'Answer is: {num1 / num2}')
    else:
        print('Input error!')

##############################

# Conditionals - Improve the Function Exercise

def num_days(month):

    if month == 'jan':
        print('number of days in',month,'is',31)
    elif month == 'feb':
        print('number of days in',month,'is',28)
    elif month == 'mar':
        print('number of days in',month,'is',31)
    elif month == 'apr':
        print('number of days in',month,'is',30)
    elif month == 'may':
        print('number of days in',month,'is',31)
    elif month == 'jun':
        print('number of days in',month,'is',30)
    elif month == 'jul':
        print('number of days in',month,'is',31)
    elif month == 'aug':
        print('number of days in',month,'is',31)
    elif month == 'sep':
        print('number of days in',month,'is',30)
    elif month == 'oct':
        print('number of days in',month,'is',31)
    elif month == 'nov':
        print('number of days in',month,'is',30)
    elif month == 'dec':
        print('number of days in',month,'is',31)

num_days('oct')
# optimize/shorten the code in the function
# try to reduce the number of conditionals 

my solution:

def num_days(month):

  if month == 'feb':
      print('number of days in',month,'is',28)
  elif month in {'apr', 'jun', 'sep', 'nov'}:
      print('number of days in',month,'is',30)
  else:
      print('number of days in',month,'is',31)

# Olof's solution:

# shorter code:
def num_days(month):

    if month == 'jan' or month == 'mar' or month == 'may' or month == 'jul' or month == 'aug' or month == 'oct' or month == 'dec':
        print('number of days in',month,'is',31)
    elif month == 'feb':
        print('number of days in',month,'is',28)
    elif month == 'apr' or month == 'jun' or month == 'sep' or month == 'nov':
        print('number of days in',month,'is',30)

# shorter still:
def num_days(month):
    days = 31
    if month == 'apr' or month =='jun' or month =='sep' or month =='nov':
        days = 30
    elif month == 'feb':
        days = 28
    # only single print statement: 
    print('number of days in',month,'is',days)

# shorter and faster:
# using set works 5-6 x faster than list or tuple:
def num_days(month):
    days = 31
    if month in {'apr','jun','sep','nov'}:
    #if month == 'apr' or month =='jun' or month =='sep' or month =='nov':
        days = 30
    elif month == 'feb':
        days = 28
    print('number of days in',month,'is',days)

##############################

# While Loops

i = 0
while i < 5: 
    i += 1
    # same as: i = i + 1
    print(f"{i}."+ "*"*i + "Loops are awesome" + "*"*i)


# Three Loop Questions:
#1. What do I want to repeat?
#  -> message
#2. What do I want to change each time?
#  -> stars
#3. How long should we repeat?
#  -> 5 times

##############################

# While Loops - Exercise - Guessing Game

print('Guessing game') 
# Guess the correct number in 3 guesses. If you don’t get it right after 3 guesses you lose the game. 
# Give user input box: 1. To capture guesses, 
# print(and input boxes) 1. If user wins 2. If user loses
# Tip:( remember you won’t see  print statements during execution, so if you want to see prints during whle loop, then print to the input box

# Modification 1: number 1-100, tell user if guess is too high/low, and let them have 5-10 guesses.
# Tip:( remember you won’t see print statements during execution, so if you want to see prints during whle loop, print to the input box (This is specific to this platform)

# Three Loop Questions:
#1. What do I want to repeat?
#  -> 
#2. What do I want to change each time?
#  -> 
#3. How long should we repeat?
#  -> 

# my solution:

from random import randrange
answer = randrange(11)
i = 0
guesses = 3
while i < guesses: 
    i += 1
    guess = int(input('Enter your guess as to what the number is: '))
    if answer != guess:
      if 3-i == 0:
        print('Game over, man!')
      else:
        print(guess, 'isn\'t the number. You have this many guesses left:', 3-i)
    else:
      print('You guessed it!', answer, 'is the number!')
      i = guesses

# my modification solution:

answer = randrange(101)
i = 0
guesses = 5
while i < guesses: 
    i += 1
    guess = int(input('Enter your guess as to what the number is: '))
    if answer != guess:
      if guesses-i == 0:
        print('Game over, man! The number was:', answer)
      else:
        if answer > guess:
          print(guess, 'isn\'t the number. Your guess is too low! You have this many guesses left:', guesses-i)
        else:
          print(guess, 'isn\'t the number. Your guess is too high! You have this many guesses left:', guesses-i)
    else:
      print('You guessed it!', answer, 'is the number!')
      i = guesses

# Olof's solution:

# Three Loop Questions:
#1. What do I want to repeat?
#  -> guesses
#2. What do I want to change each time?
#  -> guess number and number of guesses
#3. How long should we repeat?
#  -> until user loses, runs out of guesses, or wins

num = 12
guess = 0
guess_limit=3
guess_number = 0

while guess_number < guess_limit:
    guess = int(input(f'Guess # {guess_number+1} a number 1-20: last guess:{guess} '))
    if guess == num:
        print(f'You Win! You Guessed it: {guess}')
        break
    else:
        print(f'No, not {guess}!')
        guess_number += 1
if guess != num:
    print(f'Sorry you lose! It was {num}')

# Olof's modification solution:

num = 76
guess = 0
guess_limit=5
guess_number = 0
guess = int(input(f'Guess a number 1-100: '))
guess_number +=1
while guess_number < guess_limit:
    
    if guess != num:
        guess_number +=1
        if guess > num:
            guess = int(input(f'{guess} Too high - Guess again 1-100: '))
        else:
            guess = int(input(f'{guess} too low - Guess again 1-100: '))
    if guess == num:
        print(f'You Win! You Guessed it: {guess}')
        break
    
if guess != num:
    print(f'Sorry you lose! It was {num}')

##############################

# For Loops and Nesting

# For Loops:

for letter in 'Norwegian blue':
    print(letter)

print("For Loop done!")

# letter can be replaced with any name:

for furgle in 'Norwegian blue':
    print(furgle)

print("For Loop done!")

for furgle in range(8):
    print(furgle)

print("For Loop done!") # prints 0 through 7

# inclusive of 2 at start:

for furgle in range(2,8):
    print(furgle)

print("For Loop done!")

# in steps of 3:

for furgle in range(1,15,3):
    print(furgle)

print("For Loop done!")

for name in ['John','Terry','Eric','Michael','George']:
    print(name)

print("For Loop done!")

# same output:
friends = ['John','Terry','Eric','Michael','George']
for friend in friends:
    print(friend)

print("For Loop done!")

# or:

friends = ['John','Terry','Eric','Michael','George']
for index in range(len(friends)):
   print(friends[index])

print("For Loop done!")

# break in loop:
friends = ['John','Terry','Eric','Michael','George']
for friend in friends:
    if friend == 'Eric':
        print('Found ' + friend + '!')
        break
    print(friend)

print("For Loop done!")

# continue goes back up to the top of the loop:
friends = ['John','Terry','Eric','Michael','George']
for friend in friends:
    if friend == 'Eric':
        print('Found ' + friend + '!')
        continue
    print(friend)

print("For Loop done!")

# no break or continue:
friends = ['John','Terry','Eric','Michael','George']
for friend in friends:
    if friend == 'Eric':
        print('Found ' + friend + '!')
        
    print(friend)

print("For Loop done!") # will print 'Eric' twice

# Nested Loops:

friends = ['John','Terry','Eric']
for friend in friends:
    for number in [1,2,3]:
        print(friend, number)

print("For Loop done!")
# will print John 1, John 2, John 3, Terry 1 ...

##############################

# For Loops - Exercise
# - You're having a party and want to invite your friends.
# - print out an invitation for each friend using for loops
# - the names are in two lists, 'names' and 'names1'
# - you also need to add two extra names to the list using an input box when the code is run
# - names should be properly capitalized
# - Example of printout:
# John Cleese! You are invited to the party on Saturday.
# Eric Idle! You are invited to the party on Saturday.
# - Hint: you may need two for loops to solve this exercise.

names = ['john ClEEse','Eric IDLE','michael']
names1 = ['graHam chapman',
 'TERRY', 'terry jones']

#  my solution:

names.extend(names1)
newname1 = str(input('Name someone to invite to your party: '))
names.append(newname1)
newname2 = str(input('Name another someone to invite to your party: '))
names.append(newname2)
for name in names:
  print(f'{name.lower().title()}! You are invited to the party on Saturday.')

#  Olof's solution:

msg = 'You are invited to the party on saturday.'
#names.extend(names1)
names += names1
for index in range(2):
    names.append(input('Enter a new name: '))

for name in names:
    #msg1 = f'{name.title()}! {msg}'
    msg1 = name.title() + '! ' + msg
    print(msg1)

##############################

# Sort() and Sorted()

my_list = [1,5,3,7,2]
my_dict = {'car':4,'dog':2,'add':3,'bee':1}
my_tuple = ('d','c','e','a','b')
my_string = 'python'
print(my_list,'original')
# can't print, nothing is being delivered:
print(my_list.sort())
# renaming list as 'new' will allow it to be printed sorted
print(my_list,'new')

# same is true with reverse
print(my_list.reverse())
print(my_list,'new')

# sorted function yields new list
print(sorted(my_list))
print(my_list,'new')

# yields same thing as
my_list1 = sorted(my_list)
print(my_list1)

# when we sort the tuple we actually get a list
print(my_tuple,'original')
print(sorted(my_tuple))
print(my_tuple,'new')

# get a list that's sorted
print(my_string,'original')
print(sorted(my_string))
print(my_string,'new')

# with dictionary only sorts key values in ascending order
print(my_dict,'original')
print(sorted(my_dict))
print(my_dict,'new')

# get results of dictionary as tuples inside the list sorted on the key
print(my_dict,'original')
print(sorted(my_dict.items()))
print(my_dict,'new')

# get values in ascending order
print(my_dict,'original')
print(sorted(my_dict.values()))
print(my_dict,'new')

# syntax on both functions is the same
print(my_dict,'original')
print(sorted(my_dict.values(), reverse=True))
print(my_dict,'new')

# with reversed get reversed object
print(my_list,'original')
print(reversed(my_list))
print(my_list,'new')

# to see above need to do it as list
print(my_list,'original')
print(list(reversed(my_list)))
print(my_list,'new')

# special case, slicing syntax reverses list, same as above
print(my_list,'original')
print(my_list[::-1])

# get order we expect
my_list = [1,5,-3,7,-2]
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_list))

# sort by absolute values
my_list = [1,5,-3,7,-2]
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_list, key = abs))

# sorted by first element
my_list = [1,5,-3,7,-2]
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_llist))

# sorts same way
my_list = [1,5,-3,7,-2]
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_llist, key = lambda item :item[0]))

# sorts on last item
my_list = [1,5,-3,7,-2]
my_llist=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_llist, key = lambda item :item[2]))

##############################

# Dictionaries

# store key-value pairs

movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
print(movie)
print(movie['title']) # returns 'Life of Brian'

print(movie['budget']) # not in dictionary results in error
# instead, run
print(movie.get('budget'))
# get returns 'None' as an empty object which is preferable

print(movie.get('budget','not found')) # will set the default value

# changing value
movie['title'] = 'The Holy Grail'
# creating new key-value pair
movie['budget'] = 250000
print(movie.get('title'))

# change title
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
movie['title'] = 'The Holy Grail'
print(movie.get('title'))

# create new key 'year' and value
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
movie.update({'title' : 'The Holy Grail','year':1975,'cast':['John','Eric','Michael','George','Terry']})
movie['budget'] = 250000
print(movie)

# using update command
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
movie.update({'title' : 'The Holy Grail','year':1975,'cast':['John','Eric','Michael','George','Terry']})
movie['budget'] = 250000
print(movie)

# delete entries
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
movie.update({'title' : 'The Holy Grail','year':1975,'cast':['John','Eric','Michael','George','Terry']})
movie['budget'] = 250000
del movie['year']
print(movie)

# more commonly used pop command which saves popped item to variable
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
movie.update({'title' : 'The Holy Grail','year':1975,'cast':['John','Eric','Michael','George','Terry']})
movie['budget'] = 250000
year = movie.pop('year')
print(movie)
print(year)

# get length of dictionary
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}

print(len(movie))

# print keys or values
# keys
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}

print(movie.keys())

# values
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}

print(movie.values())

# items, print out as tuples
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}

print(movie.items())

# looping through dictionary
# keys
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
for key in movie:
    print(key)

# keys and values uses .items() syntax
movie = {
    'title' : 'Life of Brian',
    'year' : 1979,
    'cast' : ['John','Eric','Michael','George','Terry']
}
for key, value in movie.items():
    print(key, value)

##############################

# Dictionaries II

# keys must be unique, values not
python = {'John':35,'Eric':36,'Michael':35,'Terry':38,'Graham':37,'TerryG':34}
holy_grail = {'Arthur':40,'Galahad':35,'Lancelot':39,'Knight of NI':40, 'Zoot':17}
life_of_brian = {'Brian':33,'Reg':35,'Stan/Loretta':32,'Biccus Diccus':45}

# membership test
print('arthur' in holy_grail) # case sensitive, won't find 'arthur'

# escape quotation marks and other special characters
print('Arthur' in holy_grail)
if 'Arthur' not in python:
    print('He\'s not here')

# concatenating dictionaries
people = {}
people1 = {}
people2 = {}

#method 1 update
people.update(python)
people.update(holy_grail)
people.update(life_of_brian)
print(people)

# if you have more than two dictionaries, these methods work best:

#method 2 comprehension
for groups in (python,holy_grail,life_of_brian) : people1.update(groups)
print(sorted(people1.items()))

#method 3 unpacking Python 3.5 and later
people2 = {**python,**holy_grail,**life_of_brian}
print(sorted(people2.items()))

# sum over a dictionary
# if any values aren't numbers but are say a string, sum will crash and not give any answer
print('The sum of the ages: ', sum(people.values()))

##############################

# Dictionaries Exercise 1.0

#It’s...not really an adventure game...#Ver 1.0
#Your village is being attacked by 'a germanic tribe' and you need to run to the stores and get the right things to save your village, and probably some good looking girl or boy you want to marry. All prices in gold pieces excl. VAT... chop chop!! ze germanz are coming!
#The code should allow you to get 1 thing from each store and each item you get should be removed from the store inventory, then do same for next store...
# one way to buy by typing the key 'newt' in an input box...or something
# at end you should print the 'items' you have taken..in this version you don't have to pay for stuff or add it up

# year = movie.pop('year') pop removes and stores item in variable
# print(movie.get('budget','not found')) # will set the default value as 'not found'
# print(movie.keys())
# for key, value in movie.items():
    # print(key, value)

#create an empty shopping cart
cart = {}
#loop through stores/dicts
for LOOP OVER THE SHOPS :
    #inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
    buy_item = input(f'Welcome to {SHOPNAME}! what do you want to buy: {LIST ITEMS FOR SALE})
    #update the cart
    cart.update({insert KEYVAL:VALUE}) # use pop...
print(f'You Purchased {ITEMS PUCHASED} Today it is all free. Have a nice day of mayhem!')

#create stores
freelancers = {'name':'freelancing Shop','brian': 70, 'black knight':20, 'biccus diccus':100, 'grim reaper':500, 'minstrel':-15}
antiques = {'name':'Antique Shop','french castle':400, 'wooden grail':3, 'scythe':150, 'catapult':75, 'german joke':5}
pet_shop = {'name':'Pet Shop','blue parrot':10, 'white rabbit':5, 'newt': 2}

# my solution:
freelancers = {'name':'Freelancing Shop','brian': 70, 'black knight':20, 'biccus diccus':100, 'grim reaper':500, 'minstrel':-15}
antiques = {'name':'Antique Shop','french castle':400, 'wooden grail':3, 'scythe':150, 'catapult':75, 'german joke':5}
pet_shop = {'name':'Pet Shop','blue parrot':10, 'white rabbit':5, 'newt': 2}
mall = {}
for shops in (freelancers, antiques, pet_shop):
  mall.update(shops)
  print('Welcome to the ' + mall['name'] + '! We carry: ')
  for key in shops:
    print(key)

# test value for int to print key:
    for key, value in shops:
        if type(value) == int:
        print(key)

# Olof's solution:

# create an empty shopping cart
cart = {}
# loop through stores/dicts
for shop in (freelancers,antiques,pet_shop) :
    #inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
    buy_item = input(f'Welcome to {shop["name"]}! what do you want to buy: {shop}').lower()
    #update the cart
    cart.update({buy_item:shop.pop(buy_item)}) # use pop...
    buy_items = ", ".join(list(cart.keys()))
print(f'You Purchased {buy_items}. Today it is all free. Have a nice day of mayhem!')

##############################

# Dictionaries Exercise 1.2

#ver 1.2 add ability to exit a store without buying and go to next by typing 'exit', and to exit if a nonexistant item is bought(typed)
#Add purse with 1000 gold pieces and payment for the items during or at end of code and show a message about total cost and how much gold you have left


cart = {}
purse = 1000
for shop in (freelancers,antiques,pet_shop) :
    buy_item = input(f'Welcome to {shop["name"]}! what do you want to buy: {shop}').lower()
    if buy_item not in shop['name']:
        print(f'{buy_item} not found.')
        break
    elif buy_item == 'exit':
        break
    else:
        buy_items = ", ".join(list(cart.keys()))
        purse = purse - buy_item
print(f'You Purchased {buy_item}. It is costing you {buy_item.value()} gold pieces. You have a total of {purse - sum(cart.values())} gold pieces left in your purse.')

# Olof's solution:

#create an dempty shopping cart
cart = {}
#create purse with 100Gp
purse = 1000
buy_items1 = ''
#loop through stores/dicts
for shop in (freelancers,antiques,pet_shop) :
    #inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
    buy_item = input(f'Welcome to {shop["name"]}! (type exit to exit store) what do you want to buy: {shop}').lower()
    #exit on exit typed or buying nonexistant item
    if buy_item == 'exit':
        continue
    if buy_item not in shop:
        continue
    #update string
    buy_items1 = buy_items1 + f'{buy_item}:{shop[buy_item]} Gp, '    
    #update the cart
    cart.update({buy_item:shop.pop(buy_item)}) # use pop...
    buy_items = ", ".join(list(cart.keys()))
    total_sum = sum(cart.values())
print(f'You Purchased {buy_items}. Your total is {total_sum} Gp. Your change is {purse - total_sum} Gp. Have a nice day of mayhem!')
print(f'You Purchased {buy_items1}. Your total is {total_sum} Gp. Your change is {purse - total_sum} Gp. Have a nice day of mayhem!')

##############################

# Dictionaries Exercise 1.5

#ver 1.4 random bug fix, ' browser compatability', refactoring code... basically being lazy ..stop scrolling TikTok/Facebook! ;-)
#Ver 1.5 print inventory before and after purchases as one department_store of stuff(combine inventories from all stores into one...pretend Big Biz bought all the local stores, and want constant reporting for inventory management...)

# my solution:

#create an empty shopping cart
cart = {}
# create an empty department store
store = {}
#create purse with 100Gp
purse = 1000
buy_items1 = ''
# consolidate shops into department store
for shops in (freelancers, antiques, pet_shop): store.update(shops)
print(store)
#inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
buy_item = input(f'What do you want to buy: {store}').lower()
    if buy_item not in store:
        print(store.get(buy_item,'is not found in our inventory'))
    else:
        #update string
        buy_items1 = buy_items1 + f'{buy_item}:{store[buy_item]} Gp, '    
    #update the cart
    cart.update({buy_item:store.pop(buy_item)}) # use pop...
    buy_items = ", ".join(list(cart.keys()))
    total_sum = sum(cart.values())
    print(f'You Purchased {buy_items}. Your total is {total_sum} Gp. Your change is {purse - total_sum} Gp. Have a nice day of mayhem!')
    print(f'You Purchased {buy_items1}. Your total is {total_sum} Gp. Your change is {purse - total_sum} Gp. Have a nice day of mayhem!')

# Olof's solution:

#create stores
freelancers = {'name':'freelancing Shop','brian': 70, 'black knight':20, 'biccus diccus':100, 'grim reaper':500, 'minstrel':-15}
antiques = {'name':'Antique Shop','french castle':400, 'wooden grail':3, 'scythe':150, 'catapult':75, 'german joke':5}
pet_shop = {'name':'Pet Shop','blue parrot':10, 'white rabbit':5, 'newt': 2}
#morning inventory
department_store = {}
for department in (freelancers, antiques, pet_shop) :department_store.update(department)
department_store.pop('name')
print('Morning inventory of stores', sorted(department_store.items()))
print('-----------------')
#create an dempty shopping cart
cart = {}
#create purse with 100Gp
purse = 1000
buy_items1 = ''
#loop through stores/dicts
for shop in (freelancers,antiques,pet_shop) :
    #inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
    buy_item = input(f'Welcome to {shop["name"]}! (type exit to exit store) what do you want to buy: {shop}').lower()
    #exit on exit typed or buying nonexistant item
    if buy_item == 'exit':
        continue
    if buy_item not in shop:
        continue
    #update string
    buy_items1 = buy_items1 + f'{buy_item}:{shop[buy_item]} Gp, '    
    #update the cart
    cart.update({buy_item:shop.pop(buy_item)}) # use pop...
    buy_items = ", ".join(list(cart.keys()))
    total_sum = sum(cart.values())
print(f'You Purchased {buy_items}. Your total is {total_sum} Gp. Your change is {purse - total_sum} Gp. Have a nice day of mayhem!')
print(f'You Purchased {buy_items1}. Your total is {total_sum} Gp. Your change is {purse - total_sum} Gp. Have a nice day of mayhem!')
#evening inventory
department_store_after = {**freelancers, **antiques, **pet_shop} #pyth 3.5
department_store_after.pop('name')
print('-----------------')
print('Evening inventory of stores', sorted(department_store_after.items()))

##############################

# Exceptions: Try/Except, Raise

try:
    num=int(input('Enter a number between 1 and 30: '))
    num1 = 30/num
    if num > 30:
        raise ValueError(num)
except ZeroDivisionError as err:
    print(err, "You can't divide by Zero!!!")
except ValueError as err:
    print(err,num, "Bad Value not between 1 and 30!")
except:
    print("Invalid Input!")
else:
    print("30 divided by",num, "is: ", 30/num)
finally:
    print("**Thank you for playing!**")

#try:
    #code you want to run
#except:
    #executed if error occurs
#else:
    #executed if no error
#finally:
    #always executed 


##############################

# Classes and Objects

class Movie:
    def __init__(self,title,year,imdb_score,have_seen):
        self.title = title
        self.year = year
        self.imdb_score = imdb_score
        self.have_seen = have_seen
    
    def nice_print(self):
        print("Title: ", self.title)
        print("Year of production: ", self.year)
        print("IMDB Score: ", self.imdb_score)
        print("I have seen it: ", self.have_seen)
        
film_1 = Movie("Life of Brian",1979,8.1,True)
film_2 = Movie("The Holy Grail",1975,8.2,True)

#print(film_1.title, film_1.imdb_score)
# self is always a reference to object that's active at the moment
# argument is empty in film_2 call because it's implicit
film_2.nice_print()
# above is equivalent to:
Movie.nice_print(film_2)

films = [film_1,film_2]
print(films[1].title,films[0].title)
films[0].nice_print()

#Classes are blueprints
#Objects are the actual things you built
#variables => attributes
#functions => methods


##############################

# Inheritance

class Person:
    def move(self):
        print("Moves 4 paces")
    def rest(self):
        print("Gains 4 health points")
class Doctor(Person):
    pass # this means that Python skips empty code and makes Doctor the same as Person
    # otherwise, below code adds additional method to Person methods:
    def heal(self):
    print("Heals 10 health points")

class Fighter(Person):
    def fight(self):
        print("Do 10 health points of damage")
    def move(self):
        print("Moves 6 paces")

class Wizard(Doctor,Fighter):
# if Doctor and Fighter methods come into conflict, Python will choose Doctor as it's first in the list
    def cast_spell(self):
        print("Turns invisble")
    def heal(self):
        print("Heals 15 health points")

character1=Person()
character1.move()

character1=Doctor()
character1.heal()

character1=Fighter()
character1.heal() # throws error as Fighter doesn't have heal method
character1.move()
# Fighter's move method supercedes move method inherited from Person

character1=Wizard()
character1.heal()
# Wizard's heal method overrides heal method inherited from Doctor
character1.move()
# Python will take move method from closest Class above Wizard, so in this case, Fighter


##############################

# Modules

# examples of Python modules: datetime random string os math browser

# https://docs.python.org/3/py-modindex.html

# how to import module:
import platform

# below dir command shows what the module does by listing the methods found in it:
print(dir(platform))

# importing more than one module by separating with a comma:

import platform, string, os
# to access functions inside a specific module, prefix with module name

# checks which version of Python is running:
print(platform.python_version())

# to reduce typing, you can use an alias:

import platform as pl

print(pl.python_version())
# platform comman instead of pl will now throw an error

# importing just Python version and system
from platform import python_version, system

print(python_version())
print(system())

# reduce above import of Python version by using alias:

from platform import python_version as pv

print(pv())


##############################

# Zip and Unzip

# combining different iterables: strings, tuples, lists

nums = [1,2,3,4] 
letters = ['a','b','c','d']
names =['John','Eric','Michael','Graham','Joe']
combo = list(zip(nums, letters)) # creates list of tuples matched by index number
# will match two iterables of same length
print(combo)
# will return >[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd')]

# run the above using:
nums = '1234'
# returns lists of tuples with strings in them: >[('1', 'a'), ('2', 'b'), ('3', 'c'), ('4', 'd')]

nums = '1234' 
letters = ['a','b','c','d']
names =['John','Eric','Michael','Graham','Joe']
combo = dict(zip(nums,letters))
print(combo)
# returns a dictionary:
# > {'1': 'a', '2': 'b', '3': 'c', '4': 'd'}

# adding third list to zip
nums = '1234' 
letters = ['a','b','c','d']
names =['John','Eric','Michael','Graham','Joe']
combo = list(zip(nums,letters,names))
print(combo)
# returns >[('1', 'a', 'John'), ('2', 'b', 'Eric'), ('3', 'c', 'Michael'), ('4', 'd', 'Graham')]
# list of tuples with strings in them

# unzip
nums = '1234' 
letters = ['a','b','c','d']
names =['John','Eric','Michael','Graham','Joe']
combo = list(zip(nums,letters,names))
print(combo)
# unpacking - assigning results of unzip into three different variables
num,let,nam =zip(*combo)
# returns 
> [('1', 'a', 'John'), ('2', 'b', 'Eric'), ('3', 'c', 'Michael'), ('4', 'd', 'Graham')]
print(num, let, nam)
# returns tuples > ('1', '2', '3', '4') ('a', 'b', 'c', 'd') ('John', 'Eric', 'Michael', 'Graham')

# special case with dictionaries
keys = 'this parrot is deceased'
values = 'denna papegojan är avliden'
keys = keys.split()
values = values.split()
print(keys,values)
# returns ['this', 'parrot', 'is', 'deceased'] ['denna', 'papegojan', 'är', 'avliden']
en_sv_dict = dict(zip(keys,values))
print(en_sv_dict)
# returns {'this': 'denna', 'parrot': 'papegojan', 'is': 'är', 'deceased': 'avliden'}
# same result can be arrived at this way:
new_dict = {key:value for key,value in zip(keys,values)}
print(new_dict)

en,sv = list(en_sv_dict.keys()),list(en_sv_dict.values())
print(en,sv)
# breaks it apart again ['this', 'parrot', 'is', 'deceased'] ['denna', 'papegojan', 'är', 'avliden']

# same result but with tuples instead
en1,sv1 = zip(*en_sv_dict.items())
print(en1,sv1)
('this', 'parrot', 'is', 'deceased') ('denna', 'papegojan', 'är', 'avliden')


##############################

# Lambda Functions Part 1
# anonymous functions, single line

print(' Lambda Functions')
def square(x):
    return x*x
print(square(3))

# rewritten as a lambda
#name = lambda parameter(s): expression
square1 = lambda x: x*x
# return value is always implicit in a lambda, whereas a function doesn't have to return a value
# as long as it's on the one line, you can also right the above as a function
def square2(x):return x*x

# sticking to lambdas
double_mult = lambda x,y: 2*x*y

print(double_mult(2,3))

# user name and alias from an input box
def name_and_alias(name,alias):
    return name.strip().title() + ':' + alias.strip().title()
name_an
print(name_and_alias(' john  ClEEse  ','HECKLER'))
# returns > John Cleese:Heckler

# written as a lambda
def name_and_alias(name,alias):
    return name.strip().title() + ':' + alias.strip().title()
name_and_alias1 = lambda name,alias:name.strip().title() + ':' + alias.strip().title()
def name_and_alias2(name,alias):return name.strip().title() + ':' + alias.strip().title()

print(name_and_alias2(' john  ClEEse  ','HECKLER'))
print(name_and_alias(' john  ClEEse  ','HECKLER'))
# all three methods above do the same thing

# order by first name

monty_python = ['John Marwood Cleese','Eric Idle','Michael Edward Palin','Terrence Vance Gilliam','Terry Graham Perry Jones', 'Graham Arthur Chapman']

monty_python.sort(key = lambda name:name.split(' '))
print(monty_python)
# returns > ['Eric Idle', 'Graham Arthur Chapman', 'John Marwood Cleese', 'Michael Edward Palin', 'Terrence Vance Gilliam', 'Terry Graham Perry Jones']

# order by last name
monty_python = ['John Marwood Cleese','Eric Idle','Michael Edward Palin','Terrence Vance Gilliam','Terry Graham Perry Jones', 'Graham Arthur Chapman']

monty_python.sort(key = lambda name:name.split(' ')[-1])
print(monty_python)
# returns > ['Graham Arthur Chapman', 'John Marwood Cleese', 'Terrence Vance Gilliam', 'Eric Idle', 'Terry Graham Perry Jones', 'Michael Edward Palin']

# last name sort followed by first name sort
monty_python = ['John Marwood Cleese','Eric Idle','Michael Edward Palin','Terrence Vance Gilliam','Terry Graham Perry Jones', 'Graham Arthur Chapman']
def sort_names(name):
    return name.split(' ')
monty_python.sort(key = lambda name:name.split(' ')[-1])
print(monty_python)
monty_python.sort(key= sort_names)
print(monty_python)


##############################

# Lambda Functions Part 2

def func(n):
    return lambda a: a*n

doubler = func(2)
print(doubler)
# returns <function <lambda>>

print(doubler(3))
# returns 6

quintipler = func(5)
print(quintipler(3))
# returns 15
    
print(type(func(3)))
# returns <class 'int'>

def func(n):
    return lambda a: a*n
    
print(type(func(3)))
# returns <class 'function'>

def price_calc(start,hourly_rate):
    return lambda hours: start + hourly_rate * hours
    
walkin_cost = price_calc(10,30)
premium_cost = price_calc(1,25)
print(walkin_cost(2))
print(premium_cost(2))
print(price_calc(1,25)(2))

print((lambda a,b,c: a+b+c)(2,3,4))
print((lambda a,b,c=2: a+b+c)(2,3,4))
print((lambda a,b,c=2: a+b+c)(2,c=3,b=4))
print((lambda *args: sum(args))(2,3,4,50))


##############################

# Lambda Functions - Exercise

print('Lambdas Exercise')

# First Exercise:

def f(x): return x + 5
#insert equivalent lambda here

# my solution:
f = lambda x : x + 5

# Olof's solution:
f = lambda x: x + 5

print(f(2))

# Second Exercise:

def strip_spaces(str):
   return ''.join(str.split(' '))
#write equivalent lambda and insert Lambda here
strip_spaces1 = ...   
print(strip_spaces('Monty Pythons Flying Circus')) 

# my solution:
strip_spaces1 = lambda str : ''.join(str.split(' '))

# Olof's solution:
strip_spaces1 = lambda str:''.join(str.split(' '))  

# Third Exercise:

def join_list_no_duplicates(list_a,list_b):
   return list(set(list_a + list_b))
list_a = [1,2,3,4]
list_b = [3,4,5,6,7]
#write lambda below 
join_list_no_duplicates1 = ...
print(join_list_no_duplicates(list_a,list_b))

# my solution:
join_list_no_duplicates1 = lambda list_a, list_b : list(set(list_a + list_b))

# Olof's solution:
join_list_no_duplicates1 = lambda list_a,list_b:list(set(list_a + list_b))

# Fourth Exercise:

#Complete the function so it returns a function
def create_quad_func(a,b,c):
    '''return function f(x) = ax^2 + bx + c'''
    return lambda x:...
f = create_quad_func(2,4,6)
g = 
print(f(2))
print(g(2))

# my solution:
def create_quad_func(a,b,c):
    '''return lambda g(x) : ax^2 + bx + c'''
g = create_quad_func(2, 4, 6)
print(g(2))

# Olof's solution:
def create_quad_func(a,b,c):
    return lambda x : a*x**2 + b*x + c
g = create_quad_func(1,2,3)
print(g(2))


# Fifth Exercise:

signups = ['MPF104', 'MPF20', 'MPF2', 'MPF17', 'MPF3', 'MPF45']
print(sorted(signups)) # Lexicographic sort
#write sorting by integer

# my solution:
print(sorted(signups, key = lambda x : int(x[3:])))

# Olof's solution:
print(sorted(signups,key = lambda id:int(id[3:])))


# Sixth Exercise:

class Player:
   def __init__(self, name, score):
       self.name = name
       self.score =  score

Eric = Player('Eric', 116700)
John = Player('John', 24327)
Terry = Player('Terry', 150000)
player_list = [Eric, John, Terry]


# Exercise: Sort this by score using lambda!
# write code here

# my solution:
sorted(player_list, key = lambda x : x[1])

# Olof's solution:
player_list.sort(key = lambda player: player.score)

print([player.name for player in player_list])


##############################

# Comprehensions - Lists

numbers = [1,2,3,4,5,6,7,8,9]

new_list = []
for num in numbers:
    new_list.append(num*num)
print(new_list)

# returns: [1, 4, 9, 16, 25, 36, 49, 64, 81]

# above code verbally: give me a list with num squared for each num in numbers

# comprehension:

new_list = [num * num for num in numbers]
# returns same

# give me a list with num for each num in numbers if num is even 
new_list = [num for num in numbers if num % 2 == 0]

# returns: [2, 4, 6, 8]

# using filter and lambda
new_list = filter(lambda num: num % 2 ==0,numbers)
# has to be turned into list form filter object:
print(list(new_list))

# returns: [2, 4, 6, 8]

# I want a (letter, num) pair for each letter in 'spam' and each number in '0123'
new_list = []
for letter in 'spam':
   for num in range(4):
       new_list.append((letter,num))
print(new_list)

# returns list of tuples: [('s', 0), ('s', 1), ('s', 2), ('s', 3), ('p', 0), ('p', 1), ('p', 2), ('p', 3), ('a', 0), ('a', 1), ('a', 2), ('a', 3), ('m', 0), ('m', 1), ('m', 2), ('m', 3)]

# as a list comprehension:
new_list = [(letter, num) for letter in 'spam' for num in range(4)]
print(new_list)
# returns same as above


##############################

# Comprehensions - Dictionary

# Dictionary comprehensions
movies = ["And Now for Something Completely Different","Monty Python and the Holy Grail",
"Monty Python's Life of Brian","Monty Python Live at the Hollywood Bowl","Monty Python's The Meaning of Life","Monty Python Live (Mostly)"]
year =[1971,1975,1979,1982,1983,2014]
names = ['John','Eric','Michael','Graham','Terry','TerryG']
print(list(zip(movies, year)))
# returns list of tuples

# give me a dict('movies': year) for each movies, year in zip(movies, year)

new_dict = dict()
for movie, yr in zip(movies,year):
    new_dict[movie] = yr
print(new_dict)
# returns a dictionary

# as a comprehension
new_dict = {movie:yr for movie,yr in zip(movies,year)}
print(new_dict)
# returns same as above for loop

# adding if conditional
new_dict = {movie:yr for movie,yr in zip(movies,year) if yr < 1983}
print(new_dict)

# adding second conditional
new_dict = {movie:yr for movie,yr in zip(movies,year) if yr < 1983 and movie.startswith('Monty')}
print(new_dict)

# print out movies each person liked
n1 =[(name,movie,yr) for name,movie,yr in zip(names,movies,year) if yr < 1981 ]
print(n1)

# make it more readable
# integer for yr has to be typecast to str to be included in list
n1 =[[name + "s favorite movie was " + movie + " from " + str(yr)] for name,movie,yr in zip(names,movies,year) if yr < 1981 ]
print(n1)


##############################

# Randomness

import random
# generates number between 0 and <1
print(random.random())

# generate five random numbers
for i in range(5):
    print(random.random())

# generate five random numbers up to 6
for i in range(5):
    print(random.random()*6)

# generate five random numbers between 1 and 6 (these are all floats)
for i in range(5):
    print(random.uniform(1, 6))

# generate five random integers between 1 and 6
for i in range(5):
    print(random.randint(1,6))
    # returns 2, 3, 5, 5, 5

# randrange allows for step
for i in range(5):
    print(random.randrange(1, 100, 2))
    # selects random numbers from 1, 3, 5, 7, etc. up to, but not including, 100)

# choose and item from list randomly
friends_list =  ['John', 'Eric', 'Michael', 'Terry', 'Graham']
print(random.choice(friends_list))

# draw multiple names, but same value only once -- no duplicates
friends_list =  ['John', 'Eric', 'Michael', 'Terry', 'Graham']
print(random.sample(friends_list,3))

# shuffle the list
friends_list =  ['John', 'Eric', 'Michael', 'Terry', 'Graham']
print(random.sample(friends_list,5))
random.shuffle(friends_list)
print(friends_list)

# 
import random, string 
#  import of string gives access to constants string.ascii_letters, string.digits below

smallcaps = 'abcdefghijklmnopqrstuvwxyz'
largecaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
digits = '0123456789'
letters_numbers = string.ascii_letters + string.digits
# can specify string.ascii_lowercase or string.ascii_uppercase; no specification means you get a mix of both
#print(friends_list)

# expanding on above
for i in range(7):
    word += random.choice(letters_numbers)
# for non-repeating, no duplicates
word1 = ''.join(random.sample(letters_numbers,7))

# fix value
word = random.choices(letter_numbers, k=7)
# strings can be duplicated


##############################

# Timeit and Performance

print('Performance and Timeit module')
# Experiment with sieve of Eratosthenes

# first way
print([x for x in range(1, 151) if not any([x % y == 0 for y in range(2, x)]) and not x == 1])

# second way starts at 2 and removes the not x == 1
print([x for x in range(2, 151) if not any([x % y == 0 for y in range(2, x)])])

# third way
# Initialize a list
primes = []
for possiblePrime in range(2, 151):
# Assume number is prime until shown it is not.
   isPrime = True
   for num in range(2, int(possiblePrime ** 0.5) + 1):
       if possiblePrime % num == 0:
           isPrime = False
           break
   if isPrime:
       primes.append(possiblePrime)
print(primes)

# timing each of the three ways

import timeit

print('Performance and Timeit module')
# Experiment with sieve of Eratosthenes
def test1():
    [x for x in range(1, 151) if not any([x % y == 0 for y in range(2, x)]) and not x == 1]
    return(1)
def test2():
    [x for x in range(2, 151) if not any([x % y == 0 for y in range(2, x)])]
def test3():
    # Initialize a list
    primes = []
    for possiblePrime in range(2, 151):
    # Assume number is prime until shown it is not.
        isPrime = True
        for num in range(2, int(possiblePrime ** 0.5) + 1):
            if possiblePrime % num == 0:
                isPrime = False
                break
        if isPrime:
            primes.append(possiblePrime)
    #print(primes)
    return(1)

print(timeit.timeit('test1()', globals=globals(), number=10))
print(timeit.timeit('test2()', globals=globals(), number=10))
print(timeit.timeit('test3()', globals=globals(), number=10))

# returns 
# >Performance and Timeit module
# >3.819000005722046
# >3.441999912261963
# >0.17100000381469727


##############################

# Project - Crypto

print('Project -  Crypto')
def enigma_light()
# create keys string
    keys = 'abcdefghijklmnopqrstuvwxyz !'
# autogenerate the values string by offsetting original string
    values = keys[-1] + keys[0:-1]
# create two dictionaries, one to encode and one to decode
    dict_e = dict(zip(keys,values))
    dict_d = dict(zip(values,keys)) 
    # OR create one and then flip it to create the other
    dict_e = dict(zip(keys,values))
    dict_d = {value:key for key, value in dict_e.items()}
# user input 'the message' and mode
     msg = input('Enter your secret message quietly: ')
    mode = input('Crypto mode: encode (e) OR decrypt as default: ')
# run encode or decode
    if mode.lower() == 'e':
        new_msg = ''.join([dict_e[letter] for letter in msg.lower()])
    else:
        new_msg = ''.join([dict_d[letter] for letter in msg.lower()])
    
    return new_msg.capitalize()
# return result
# clean and beautify the code 


##############################

# Project - Math Tutor

# objective: create application to practice multiplication tables
# - user specifies number of random practice questions
#  - user is presented with a prompt, e.g., 5 x 5, and inputs answer for each question
#  - when all questions have been answered, print out:
#  - - a. some form of 'thanks for playing' greeting
#  - - b. number of correct answers
#  - - c. percentage of correct answers
# can use different rows
# remember line break (\n) and triple quotes (''') don't work properly with Brython

# import modules
from random import randrange as r
from time import time as t

# ask how many questions user wants
no_questions = int(input('How many questions would you like to try?: '))
max_num =int(input('Highest number you want to use in practice?: '))

# set score start at zero
score = 0
answer_list = []
# loop through number of questions
start = t()
for q in range(no_questions):
    num1,num2 = r(1, max_num+1), r(1, max_num+1)
    ans = num1 * num2
    u_ans = int(input(f'{num1} X {num2} = '))
    answer_list.append(f'{num1} X {num2} = {ans} you:{u_ans}')
    if u_ans == ans:
        score += 1
    end = t()
print(f'Thank you for playing! \nYou got {score} out of {no_questions} ({round(score/no_questions * 100)}%) correct in {round(end - start, 1)} seconds ({round((end - start)/no_questions, 1)} seconds/question)')

for a in answer_list:
    print(a)

# create two random numbers and calc answer
# show user the question
# capture answer and modify user score
# output final score
# bonus 1: measure & present time taken to answer, in total and per question
# bonus 2: let user specify how high numbers used should be
# bonus 3: show all questions and answers at end


##############################

# Project - Marble Trading Game

# create a marble betting game:
# player draws a random marble from a bag
# a bag has 10 marbles: 6 green and 4 red
# if player draws a green marble, player wins same amount player bet; draws a red, loses the same amount
# marbles are replaced into bag after each round
# before each draw, player enters amount of bet
# player starts game with 1000 gold pieces or $, £, €
# number of rounds should be variable
# if player loses half of money, the game is over
# print data as player goes along

# bonus: replace green marble with a black 10x winner marble, red with 5x loser marble

import random

## pseudocode:

# create a bag with 10 marbles
bag = ('green','green','green','green','green','green','red','red','red','red')

# bonus: replace a red and a green marble with a black and a white one
# bag = ('green','green','green','green','green','black','red','red','red','white')

# starting amount of money
start_purse = 1000

# current amount of money
purse = start_purse

# result of last round
result = 0

# how many rounds will be played
rounds = 3

# last marble was
marble = 'none'

# welcome user to game
print(f'You start the game with {start_purse} gold pieces')

# loop drawing marbles
for draw in range (1, rounds + 1):
    # how much was bet
    bet = int(input(f'Current Purse: {purse} Last draw: {marble} \nRound {draw} - How much do you want to bet?: '))

    # draw marble
    marble = random.choice(bag)

    # win or loss
    if marble == 'green':
        result = bet
    else:
        result = -bet

    # bonus: win or loss
    # if marble == 'green':
    #     result = bet
    # elif marble == 'black':
    #     result = 10 * bet
    # elif marble == 'white':
    #     result = -5 * bet
    # else:
    #     result = -bet

    # calculate win or loss and new amount
    purse += result

    # lose game if half of money lost
    if purse < 0.5 * start_purse:
        print(f'Game over! You lost too much gold!!!')
        break

    # print results
    print(f'purse: {purse}, last result: ({marble}): {result}')
    print('')

# print final results
print('starting/ending purse: ', start_purse, '/', purse)
print('gain/loss: ', ((purse-start_purse)/start_purse * 100),'%')


##############################

# Project - Euler Problem 4

# largest palindrome of two numbers with three digits each
# a palindrome is a number that is the same backwards and forwards, like 101 or 990099

import time

def is_palindrome(val):
    val = str(val)
    if val == val[::-1]
        return(True)
    else:
        return(False)

# alternative set-up:
# def is_palindrome(val):
    # return str(val) == str(val)[::-1]

# brute force approach
def palindrome():
    start_time = time.time()
    palindromes_list=[]
    debug_list=[]
    low_val =900
    high_val = 999
    iterations = 0
    
    for num1 in range(low_val,high_val):
        for num2 in range(low_val,high_val):
            iterations += 1
            #print(num1,num2)
            if is_palindrome(num1*num2):
                palindromes_list.append(num1*num2)
                debug_list.append([num1,num2,num1*num2])
            # cut iterations in half
            if num1 == num2:
                break
    print('print of palindromes:',palindromes_list, num1, num2)
    print('debug_list:', debug_list)
    print('Iterations:' , iterations)
    print('Largest palindrome:', max(palindromes_list))
    print('Runtime:', time.time()-start_time)
    print('---------End Run--------')

palindrome()

