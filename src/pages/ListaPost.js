import React, { useReducer } from 'react';
import TopAppBar from '../components/TopAppBar';
import { Text, ListView } from 'react-native';
import Regresar from '../components/Regresar';
import postsList, { initialPost } from '../reducers/postsList';
import { Link } from 'react-router-native';


const ListaPost = () =>{
    const [state, dispatch] = useReducer(postsList,initialPost)

    return(
    <>
        <TopAppBar>
            <Regresar />
            <Text style={titleText} >
                <Text> Lista post</Text>
                <Link to='/AddPost'>
                    <Text style={{marginLeft:50,fontSize:20}} > 
                        Agregar
                    </Text>
                </Link>
            </Text>
        </TopAppBar>
        <ListView
            dataSource={state}
            renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    </>
    );
}

const titleText ={
    fontSize:30,
    padding:15,
    margin:1,
    textAlign:'center',
    marginBottom:40,
    position:'absolute',
    marginLeft:80,
}

export default ListaPost;