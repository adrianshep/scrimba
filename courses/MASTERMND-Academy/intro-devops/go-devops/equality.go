package main

import "fmt"

func main() {
	fmt.Println(5 == 5)
	// fmt.Println(5 == "5")
	// cannot convert "5" (type untyped string) to type int
	// invalid operation: 5 == "5" (mismatched types int and string)
	fmt.Println(5 == 6)
}
