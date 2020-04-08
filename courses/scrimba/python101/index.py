
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

def greeting(name, age=28, color='red'):
    #Greets user with 'name' from 'input box' and 'age', if available, default age is used
    print('Hello, '  +  name + ', you are ' + str(age) +'!')
    print(f'Hello, {name}, you are {age}!')

    print('We hear you like the color ' + str(color) + '.')
    print(f'We hear you like the color {color}.')

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

