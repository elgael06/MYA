import React from 'react';
import { NativeRouter as Router, Route, Switch } from "react-router-native";
import Home from '../pages/Home';
import About from '../pages/About';
import AddPost from '../pages/AddPost';
import ListaPost from '../pages/ListaPost';
import LayoutApp from '../components/LayoutApp';
import Series from '../pages/series';
import Capitulos from '../pages/series/Capitulos';


export default()=>{

    return(<LayoutApp>
        <Router  >
            <Switch key='root' >
                <Route path='/' component={Home} exact={true} />
                <Route path='/About' component={About} exact={true} />
                <Route path='/Post' component={ListaPost} exact={true} />
                <Route path='/AddPost' component={AddPost} exact={true} />
                <Route path='/Series' component={Series} exact={true} />
                <Route path='/Capitulos' component={Capitulos} exact={true} />
            </Switch>
        </Router>
    </LayoutApp>);
}