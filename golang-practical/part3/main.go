package main

import "fmt"

// func add(x float64,y float64) float64 {
// becomes
func add(x,y float64) float64 {
  return x + y
}

// can also declare constants, e.g.
// const x int = 5

func multiple(a,b string) (string,string) {
  return a,b
}

func main() {
  // var num1 float64 = 5.6
  // var num2 float64 = 9.5
// becomes
  // var num1,num2 float64 = 5.6, 9.5
// which becomes
  num1,num2 := 5.6, 9.5
  // (above will throw error as "declared and unused" if not used, so should be used or commented out)
// but then you can't change the type, i.e., to float32
  // fmt.Println(add(num1,num2))

  w1, w2 := "Hey","there"

  fmt.Println(multiple(w1,w2))

// converting an int to a float64
  var a int = 62
  var b float64 = float64(a)

  x := a
  // x will be type int
}
