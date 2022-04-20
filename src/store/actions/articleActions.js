import http from "../../services/httpService"
import { Error, Success } from "../../utils/exceptionHandler"
import { GetAllArticle } from "./type"

export const getAllArticle = () => {
    return async dispatch => {
        await http.get("articles")
            .then(res => {
                Success(res)
                dispatch({
                    type: GetAllArticle,
                    payload: res.data.data
                })
            })
            .catch(err => Error(err))
    }
}