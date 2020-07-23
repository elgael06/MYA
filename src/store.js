
import { createStore, combineReducers } from 'redux';
import postsList, { initialPost } from './reducers/postsList';
import series, { initialSeries } from './reducers/series';

const reducers = combineReducers({
    postsList,
    series,
}); 

export default createStore(reducers,{
    postsList:initialPost,
    series:initialSeries
});


