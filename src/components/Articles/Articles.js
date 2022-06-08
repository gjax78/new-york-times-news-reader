import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({ articles }) => {
  let counter = 0

  const cards = articles.map(article => (
    <ArticleCard
      key={counter++}
      genre={article.section}
      title={article.title}
      abstract={article.abstract}
      url={article.url}
      byline={article.byline}
      published={article.published_date}
      image={article.multimedia[0].url}
      alt={article.multimedia[0].caption}
    />
  ))

  return (
    <section className='articles-section'>
      <div className='card-container'>{cards}</div>
    </section>
  )
}

export default Articles