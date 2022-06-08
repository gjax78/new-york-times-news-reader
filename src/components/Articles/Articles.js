import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const Articles = ({ articles }) => {
  const cards = articles.map((article, index) => (
    <ArticleCard
      key={index}
      id={article.short_url.split('/')[3]}
      title={article.title}
      abstract={article.abstract}
      multimedia={article.multimedia}
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