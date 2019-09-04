package main

import "fmt"

func foo(c chan int, someValue int) {
  // because we are sending over the channel, we don't need a return in this function:
  c <- someValue * 5
}

func main() {
  fooVal := make(chan int)

  go foo(fooVal, 5)
  go foo(fooVal, 3)

  // v1 := <-fooVal
  // v2 := <-fooVal

  v1, v2 := <-fooVal, <-fooVal

  fmt.Println(v1, v2)
}
