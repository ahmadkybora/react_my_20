import { GetAllArticle } from "../actions/type"

const initialState = {
    articles: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GetAllArticle:
            {
                return {
                    ...state,
                    articles: action.payload
                }
            }
        default:
            return state
    }
}