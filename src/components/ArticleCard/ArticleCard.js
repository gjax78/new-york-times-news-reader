import './ArticleCard.css'
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, abstract, id, multimedia }) => {
  return(
    <article className='article-card'>
      <img src={multimedia[1].url} alt={multimedia[1].caption} />
      <Link to={`article/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{abstract}</p>
    </article>
  )
}

export default ArticleCard;