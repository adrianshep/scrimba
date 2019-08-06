package main

import ("fmt"
        "net/http"
        "io/ioutil")

func main() {
  // err replaced by _ -- use _ in place of a variable you define but don't use it
  resp, _ := http.Get("https://www.washingtonpost.com/news-sitemap-index.xml")
  // read all from the response body:
  bytes, _ := ioutil.ReadAll(resp.Body)
  // convert response to string:
  string_body: := string(bytes)
  fmt.Println(string_body)
  // free up the resource that made the request by closing it:
  resp.Body.Close()
}
