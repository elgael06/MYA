import React from 'react';
import { View, TextInput, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Regresar from '../components/Regresar';
import TopAppBar from '../components/TopAppBar';
import MyTextInput from '../components/MyTextInput';
import MyBotton from '../components/MyBotton';

const AddPost = () =>{

    return(<>
        <TopAppBar>
            <Regresar />
            <Text style={titleText}>Nuevo Post</Text>
        </TopAppBar>

        <MyTextInput titulo='Titulo' />
        <MyTextInput titulo='Descripcion' />
        <MyTextInput titulo='Cuerpo' />
        <MyTextInput titulo='Url imagen' />
        
        <MyBotton 
            text='Guardar'
        />
    </>);
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


export default AddPost;