/* eslint-disable react/prop-types */
import "./article.css";
export default function Article({ article }) {
  return (
    <div className="article">
      <div className="article__header-img">
        <img src={article.image} />
      </div>
      <div className="article__details">
        <p className="article__details-date">{article.date}</p>
        <p className="article__details-title">{article.title}</p>
        <div className="article__details-footer">
          <a href={article.url}>{article.linktext}</a>
        </div>
      </div>
    </div>
  );
}
