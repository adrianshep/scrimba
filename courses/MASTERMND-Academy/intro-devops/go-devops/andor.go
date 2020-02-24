package main

import "fmt"

func main() {
	num := 13
	// check if 5 is > num OR if num == 10
	fmt.Println(5 > num || num == 10)
	// check if 5 is > num AND if num == 10
	fmt.Println(5 < num && num == 13)
}
