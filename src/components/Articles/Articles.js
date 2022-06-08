import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({ articles }) => {
  const cards = articles.map(article => (
    <ArticleCard
      key={Date.now()}
      genre={article.section}
      title={article.title}
      abstract={article.abstract}
      url={article.url}
      byline={article.byline}
      published={article.published_date}
      multimedia={article.multimedia}
    />
  ))

  return (
    <section className='articles-section'>
      <div className='card-container'>{cards}</div>
    </section>
  )
}

export default Articles