
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsList, { initialPost } from './reducers/postsList';
import series, { initialSeries } from './reducers/series';

const reducers = combineReducers({
    postsList,
    series,
}); 

export default createStore(reducers,{
    postsList:initialPost,
    series:initialSeries
}, applyMiddleware(thunk));


