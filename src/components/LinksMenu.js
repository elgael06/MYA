import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

const LinksMenu = ()=>{

    return(<View>

        <Link to='/' underlayColor="#f0f4f7" style={stylesLink}  >
            <Text> Home</Text>
        </Link>
        <Link to='/About' underlayColor="#f0f4f7" style={stylesLink} >
            <Text>About</Text>
        </Link>
        <Link to='/AddPost' underlayColor="#f0f4f7" style={stylesLink} >
            <Text>Add Post</Text>
        </Link>
    </View>);
}

const stylesLink = {
    flex: 1,
    alignItems: "center",
    padding: 20
}


export default LinksMenu;


