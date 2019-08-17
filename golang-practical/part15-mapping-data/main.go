package main

import ("fmt"
        "net/http"
        "io/ioutil"
        "encoding/xml")

// we've visited the site map that contains a number of other site maps, we've pulled those locations to the other site maps, and now we're grabbing all of those site maps and parsing them for titles, keywords and locations which we want to store in a map through which we can iterate. map makes more sense than using a struct: cleaner and easier.

type Sitemapindex struct {
  Locations []string `xml:"sitemap>loc"`
}

type News struct {
  Titles []string `xml:"url>news>title"`
  Keywords []string `xml:"url>news>keywords"`
  Locations []string `xml:"url>loc"`
}

// because we can only map to a single type value, so we create a struct that is our own type
//  key of the map will be the title, keyword and location will be our values
type NewsMap struct {
  Keyword string
  Location string
}

func main() {
  var s Sitemapindex
  var n News
  // map where key is a string and NewsMap will be our values
  news_map := make(map[string]NewsMap)
  resp, _ := http.Get("https://www.washingtonpost.com/news-sitemap-index.xml")
  bytes, _ := ioutil.ReadAll(resp.Body)
  xml.Unmarshal(bytes, &s)

  for _, Location, := range s.Locations {
    resp, _ := http.Get(Location)
    bytes, _ := ioutil.ReadAll(resp.Body)
    // as we iterate over this information, we can store it into our map
    xml.Unmarshal(bytes, &n)
    // idx is index:
    for idx, _ := range n.Titles{
      news_map[n.Titles[idx]] = NewsMap{n.Keywords[idx]}, n.Locations[idx]
    }
  }
  for idx, data := range news_map {
    fmt.Println("\n\n\n", idx)
    fmt.Println("\n", data.Keyword)
    fmt.Println("\n", data.Location)
  }
}

}
