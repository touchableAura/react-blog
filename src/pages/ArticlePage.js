import { useParams } from 'react-router-dom'

const ArticlePage = () => {
    const params = useParams();
    const articleId = params.articleId;

    return(
    <h1>this is the article page for the article with the id: {articleId}</h1>
    );
};

export default ArticlePage;