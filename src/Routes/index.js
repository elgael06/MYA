import React from 'react';
import { NativeRouter as Router, Route, Switch } from "react-router-native";
import Home from '../pages/Home';
import About from '../pages/About';
import AddPost from '../pages/AddPost';
import ListaPost from '../pages/ListaPost';


export default()=>{

    return(<Router  >
        <Switch key='root' >
            <Route path='/' component={Home} exact={true} />
            <Route path='/About' component={About} exact={true} />
            <Route path='/Post' component={ListaPost} exact={true} />
            <Route path='/AddPost' component={AddPost} exact={true} />
        </Switch>
    </Router>);
}