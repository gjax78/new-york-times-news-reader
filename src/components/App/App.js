import './App.css';
import React, {useState, useEffect} from 'react'
import fetchAPI from '../../apiCalls'
import Header from '../Header/Header'
import Articles from '../Articles/Articles'
import Search from '../Search/Search'
import { Route} from 'react-router-dom'

const App = () => {
  const [articles, setArticles] = useState([])
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  const fetchStories = () => {
    fetchAPI.getData()
       .then((data) => setArticles(data.results))
       .catch((error) => setError(error))  
    }

  useEffect(() => {
    fetchStories()
  }, [])

  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(search) || article.title.includes(search));

  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        <Search setSearch={setSearch}/>
        <Articles articles={filteredArticles}/>
      </Route>
    </div>
  )
}

export default App;
