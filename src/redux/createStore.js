import {combineReducers, compose, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {data} from "./reducers/data"


let rootReducer = combineReducers({
    data
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))

)