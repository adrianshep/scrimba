package main

import "fmt"

// Fizz Buzz - print numbers 0-100; if:
// 1. if number divisible by 3, print "Fizz"
// 2. if number divisible by 5, print "Buzz"
// 3. if number divisible by 3 and 5, print "FizzBuzz"

func main() {
	for num := 0; num <= 100; num++ {
		fmt.Println(num)
	}
}
