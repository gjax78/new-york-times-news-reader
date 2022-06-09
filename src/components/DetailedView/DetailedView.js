import './DetailedView.css';

const DetailedView = ({ articles, id }) => {
  const selectedArticle = articles.find(article => article.short_url.split('/')[3] === id)

  return(
    <div className='details-viewpage'>
      <div className='article-details'>
        <div className='img-container'>
          <img src={selectedArticle.multimedia[1].url} alt={selectedArticle.multimedia[1].caption} />
        </div>
        <div className='details-container'>
          <h1>{selectedArticle.title}</h1>
          <p>{selectedArticle.abstract}</p>
          <p>{selectedArticle.byline}</p>
          <a className='article-link' href={selectedArticle.short_url} target='_blank'>Read More</a>
          <p>{selectedArticle.updated_date}</p>
          <p>{selectedArticle.section} {selectedArticle.subsection}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailedView;
