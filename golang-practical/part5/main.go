package main

import ("fmt",
        "net/http")

func main() {
  http.HandleFunc("/", index_handler)
  http.ListenAndServe(":8000", nil)
}
