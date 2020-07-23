
import { createStore, combineReducers } from 'redux';
import postsList, { initialPost } from './reducers/postsList';

const reducers = combineReducers({
    postsList,
}); 

export default createStore(reducers,{
    postsList:initialPost,
});


