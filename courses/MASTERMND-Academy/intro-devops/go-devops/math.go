package main

import "fmt"

func main() {
	// Math Operators

	// addition
	fmt.Println(5 + 500)
	// subtraction
	fmt.Println(54 - 3849)
	// division
	fmt.Println(10 / 3)
	// multiplication
	fmt.Println(232 * 27)
	// modulus - returns the remainder
	fmt.Println(500 % 323)
	// increment
	inc := 10
	inc++
	fmt.Println(inc)
	// decrement
	dec := 10
	dec--
	fmt.Println(dec)

	// Constants
	// cannot declare const and assign its value later
	// s cannot be changed
	const s string = "constant"

	fmt.Println(s)
}
