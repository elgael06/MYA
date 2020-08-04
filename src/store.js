
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsList, { initialPost } from './reducers/postsList';
import series, { initialSeries } from './reducers/series';
import userInterface,{ InitialStateInterface } from './reducers/userInterface';


const reducers = combineReducers({
    postsList,
    series,
    userInterface
}); 

export default createStore(reducers,{
    postsList:initialPost,
    series:initialSeries,
    userInterface:InitialStateInterface
}, applyMiddleware(thunk));


