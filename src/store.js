
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsList, { initialPost } from './reducers/postsList';
import series, { initialSeries } from './reducers/series';
import userInterface,{ InitialStateInterface } from './reducers/userInterface';
import sesion, { defaultSesion } from './reducers/sesion';


const reducers = combineReducers({
    postsList,
    series,
    userInterface,
    sesion
}); 

export default createStore(reducers,{
    postsList:initialPost,
    series:initialSeries,
    userInterface:InitialStateInterface,
    sesion:defaultSesion
}, applyMiddleware(thunk));


