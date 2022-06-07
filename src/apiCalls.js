const fetchAPI = {
  getData() {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BwIZMxZBbFo4UDX9U3Ji7cs2gcVtf9XE`)
    .then(response => {
      if (!response.ok) {
        throw new Error()
      } else {
        return response.json()
      }
    })
  }
}

export default fetchAPI