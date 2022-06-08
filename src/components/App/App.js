import './App.css';
import React, {useState, useEffect} from 'react'
import fetchAPI from '../../apiCalls'
import Header from '../Header/Header'
import Articles from '../Articles/Articles'
import { Route} from 'react-router-dom'


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
      <Route exact path='/'>
        <Articles articles={articles} />
      </Route>
    </div>
  )
}

export default App;
