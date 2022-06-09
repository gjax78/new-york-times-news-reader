import './DetailedView.css';
import { Link } from 'react-router-dom';

const DetailedView = ({ articles, id }) => {
  const selectedArticle = articles.find(article => article.short_url.split('/')[3] === id)

  return(
    <div className='details-viewpage'>
      <Link to='/'>
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default DetailedView;
