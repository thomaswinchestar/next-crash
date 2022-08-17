import articleStyles from '../styles/Article.module.css'
import ArticleItem from "./ArticleItem"
const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map(article => (
          // eslint-disable-next-line react/jsx-key
          <ArticleItem article={article} key={article.id}/>
      ))}
    </div>
  )
}

export default ArticleList