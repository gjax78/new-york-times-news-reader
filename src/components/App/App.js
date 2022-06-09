import './App.css';
import React, {useState, useEffect} from 'react'
import fetchAPI from '../../apiCalls'
import Header from '../Header/Header'
import Articles from '../Articles/Articles'
import Search from '../Search/Search'
import Error from '../Error/Error'
import DetailedView from '../DetailedView/DetailedView'
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  const [articles, setArticles] = useState([])
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
      <Switch>
      <Route exact path='/'>
        <Search search={search} setSearch={setSearch}/>
        <Articles articles={filteredArticles}/>
      </Route>

      <Route 
          exact path='/article/:id' 
          render={({ match }) => {
            return (
              articles.length ?
              <DetailedView
                id={match.params.id}
                articles={articles}
              />
              : null 
            ) 
          }}
        />

      <Route >
        <Redirect to='/error' />
        <Error
          error={error}
        />
      </Route>
    </Switch>
    </div>
  )
}

export default App;
