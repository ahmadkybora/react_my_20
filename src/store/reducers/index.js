import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    articleReducer,
});

export default rootReducer;