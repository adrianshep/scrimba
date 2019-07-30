package main

import ("fmt"
        "net/http")

// * means reading through http.Request, not its memory address
func index_handler(w http.ResponseWriter, r *http.Request) {
  // F will format based on what you specify, in this case, the writer itself, as well as output what you ask it to
  fmt.Fprintf(w, "Whoa, Go is neat!")
}

func about_handler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Expert web design by Sentdex")
}

func main() {
  http.HandleFunc("/", index_handler)
  http.HandleFunc("/about/", about_handler)
  http.ListenAndServe(":8000", nil)
}
