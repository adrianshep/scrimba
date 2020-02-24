package main

import "fmt"

func main() {
	age := 20

	//  check if person is old enough to drink
	// if condition is met, code does not proceed to next condition
	if age > 21 {
		fmt.Println("You may enter the bar because you can drink.")
	} else if age == 21 {
		fmt.Println("BlackJack! You may enter the bar.")
	} else {
		fmt.Println("You shall not pass!")
	}
}
