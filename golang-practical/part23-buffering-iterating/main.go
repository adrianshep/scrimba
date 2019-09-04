package main

import (
    "fmt"
    "sync"
  )

var wg sync.WaitGroup

func foo(c chan int, someValue int) {
  defer wg.Done()
  c <- someValue * 5
}

func main() {
  // adding 10 items into a buffer
  fooVal := make(chan int, 10)
  for i := 0; i < 10; i++ {
    wg.Add(1)
    go foo(fooVal, i)
  }
// range wants to iterate over fooVal, but doesn't know when fooVal is done
  wg.Wait()
  close(fooVal)

  for item := range fooVal {
    fmt.Println(item)
  }
}
