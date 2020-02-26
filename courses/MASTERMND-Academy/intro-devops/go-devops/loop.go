package main

import "fmt"

func main() {
	// for count := 0; count <= 100; count++ {
	// 	fmt.Println(count)
	// }

	// creates a slice:
	names := []string{"james", "aaron", "james", "tom", "brady"}

	for x := 0; x < len(names); x++ {
		if names[x] == "james" {
			fmt.Println("Hello, James")
		}
	}
}
