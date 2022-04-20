import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllArticle } from "../../store/actions/articleActions";
import flower from "../../images/flower.png";

const Articles = () => {
    const articles = useSelector(state => state.articleReducer.articles)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllArticle())
    }, [])

    return (
        <>
            <div className="bg-gray-200 mt-8">
                {articles && articles.map(article => (
                    <div 
                        key={article.id} 
                        className="bg-red-500 my-2 mx-32 rounded-full overflow-hidden shadow-md"
                    >
                        <img 
                            src={flower} 
                            className="object-cover h-32 w-96" 
                        />
                        <div className="">
                            <span className="font-bold">Title: {article.title}</span>
                            <span className="">Description: {article.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Articles