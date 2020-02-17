package main

import (
	"fmt"
)

func main() {
	name := "Ado"
	// Print simply prints what you pass to it
	// fmt.Print("Hello, playground")
	// Println prints what is passed to it while adding a newline character
	fmt.Println("Hello, playground")
	// Operates like fmt.Print but allows for output formatting
	fmt.Printf("Hello, %s", name)
}
