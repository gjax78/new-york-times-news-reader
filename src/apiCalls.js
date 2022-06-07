const fetchAPI = {
  getData() {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
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