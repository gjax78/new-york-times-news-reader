import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard'
import PropTypes from 'prop-types'

const Articles = ({ articles }) => {
  const cards = articles.map((article, index) => (
    <ArticleCard
      {...article}
      key={index}
      id={article.short_url.split('/')[3]}
    />
  ))

  return (
    <section className='articles-section'>
      <div className='card-container'>
        {cards}
      </div>
    </section>
  )
}

export default Articles

Articles.propTypes = {
  articles: PropTypes.array.isRequired
}