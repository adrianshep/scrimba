package main

// import "fmt"
//
// func foo() {
//   // defer fmt.Println("Done!")
//   // defer fmt.Println("Are we done?")
//   // fmt.Println("Doing some stuff, who knows what?")
//   for i := 0; i < 5; i++ {
//     defer fmt.Prinln(i)
//   }
// }
//
// func main() {
//   foo()
// }


import (
  "time"
  "fmt"
  "sync"
)

var wg sync.WaitGroup

func say(s string) {
  defer wg.Done()
  for i := 0; i < 3; i++ {
    time.Sleep(time.Millisecond*100)
    fmt.Println(s)
  }
}

func main() {
  wg.Add(1)
  go say("Hey")
  wg.Add(1)
  go say("There")
  // wg.Wait()

  wg.Add(1)
  go say("Hi")
  wg.Wait()
}
