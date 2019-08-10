// package main
//
// import "fmt"

// func main() {
// classic for loop that practically isn't used in Go:
  // for i:= 0; i<10; i++ {
  //   fmt.Println(i)
  // }
// }

// more likely:

  // i:=0
  //
  // for i<10 {
  //   fmt.Println(i)
  //   i++
  //   // or i+=5, for example
  // }

  // OR

  // func main() {
    // x := 5
    //
    // for {
    //   fmt.Println("Do stuff", x)
    //   x+=3
    //   if x > 25 {
    //     break
    //   }
    // }

    //  or
    // func main() {
    //   for x:=5; x<25; x+=3 {
    //     fmt.Println("Do stuff", x)
    //   }
    // }

  // a more complex example of a for loop in Go

    // func main() {
    //   a:=3
    //   for x:=5; a<25; x+=3 {
    //     fmt.Println("do stuff", x)
    //     a+=4
    //   }
    // }

    package main

    import ("fmt"
            "net/http"
            "io/ioutil"
            "encoding/xml")

    type SitemapIndex struct {
      // an array of the Location type and tag that it's under when you go to unmarshal it (capitalization is important here or values won't be exported):
      Locations []Location `xml:"sitemap"`
    }

    // Slices vs Arrays
    //  [5 5]int is an array
    //  []int is a slice

    type Location struct {
      Loc string `xml:"loc"`
    }

    func (l Location) String() string {
      return fmt.Sprintf(l.Loc)
    }

    func main() {
      // err replaced by _ -- use _ in place of a variable you define but don't use it
      resp, _ := http.Get("https://www.washingtonpost.com/news-sitemap-index.xml")
      // read all from the response body:
      bytes, _ := ioutil.ReadAll(resp.Body)
      // free up the resource that made the request by closing it:
      resp.Body.Close()

      var s SitemapIndex
      xml.Unmarshal(bytes, &s)

      // fmt.Println(s.Locations)
      // fmt.Printf("Here %s some %s", "are", "variables")
      // range function iterates over structure and returns index value and actual value:
      for _, Location, := range s.Locations {
        fmt.Printf("\n%s", Location)
      }
    }

  }
