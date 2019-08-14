package Sitemapindex

import "fmt"

func main() {
  // since map is just a reference type and you want it to have values, you have to encase it in make:
  grades := make(map[string]float32)

  grades["Timmy"] = 42
  grades["Jess"] = 92
  grades["Sam"] = 67

  // fmt.Println(grades)

// can run in terminal gofmt filename.go and it will apply proper Go format to it
  TimsGrade := grades["Timmy"]
  fmt.Println(TimsGrade)

// how to delete an entry:
  delete(grades,"Timmy")
  fmt.Println(grades)

// where k is key and v is value:
  for k, v := range grades {
    fmt.Println(k,":",v)
  }
}
