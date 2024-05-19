import "./blog.css";

import Article from "../../components/Article/Article.jsx";
import { ArticleList } from "../../Data";

export default function Blog() {
  return (
    <div className="blog__container section__margin">
      <h1 className="gradient__text">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="blog__article-container">
        {ArticleList.map((article, index) => (
          <Article article={article} key={index} />
        ))}
      </div>
    </div>
  );
}
