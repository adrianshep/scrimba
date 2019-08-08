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

  fmt.Println(s.Locations)
}
