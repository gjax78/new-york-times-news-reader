import './App.css';
import React, {useState, useEffect} from 'react'
import fetchAPI from '../../apiCalls'
import Header from '../Header/Header'

const App = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  const fetchStories = () => {
    fetchAPI.getData()
       .then((data) => setArticles(data.results))
       .catch((error) => setError(error))  
    }

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App;
