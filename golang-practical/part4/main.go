package main

import "fmt"

func main() {
  x := 15
  // below points to memory address
  a := &x
  fmt.Println(a)
  // below reads through memory address, x is now equal to 5
  fmt.Println(*a)
  *a = 5
  fmt.Println(x)
  //
  *a = *a**a
  fmt.Println(x)
  fmt.Println(*a)
  // prints 5 * 5, 25
}
