package main

import (
  "fmt"
  "net/http"
  "html/template"
  "io/ioutil"
  "encoding/xml"
)

type Sitemapindex struct {
  Locations []string `xml:"sitemap>loc"`
}

type News struct {
  Titles []string `xml:"url>news>title"`
  Keywords []string `xml:"url>news>keywords"`
  Locations []string `xml:"url>loc"`
}

type NewsMap struct {
  Keyword string
  Location string
}

type NewsAggPage struct {
  Title string
  News map[string]NewsMap
}

func newsAggHandler(w http.ResponseWriter, r *http.Request) {
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

  p := NewsAggPage{Title: "Amazing News Aggregator", News: news_map}
  t, _ := template.ParseFiles("newsaggtemplate.html")
  fmt.Fprintln(t.Execute(w, p))
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "<h1>Whoa, Go is neat!</h1>")
}

func main() {
  http.HandleFunc("/", indexHandler)
  http.HandleFunc("/agg/", newsAggHandler)
  http.ListenAndServe(":8000", nil)
}
