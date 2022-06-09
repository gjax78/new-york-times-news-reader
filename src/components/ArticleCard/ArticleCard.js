import './ArticleCard.css'
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, abstract, id, multimedia }) => {
 let images = multimedia ? <img src={multimedia[1].url} alt={multimedia[1].caption} /> : null
  
  return(
    <article className='article-card'>
      {images}
      <Link to={`article/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{abstract}</p>
    </article>
  )
}

export default ArticleCard;
