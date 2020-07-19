import React from 'react';
import { View, TextInput, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Regresar from '../components/Regresar';
import TopAppBar from '../components/TopAppBar';

const AddPost = () =>{

    return(<>
        <TopAppBar>
            <Regresar />
            <Text style={titleText}>Nuevo Post</Text>
        </TopAppBar>

        <MyTextImput titulo='Titulo' />
        <MyTextImput titulo='Descripcion' />
        <MyTextImput titulo='Cuerpo' />
        <MyTextImput titulo='Url imagen' />
        
        <TouchableHighlight >
            <Text style={botonEnviar}>Guardar</Text>
        </TouchableHighlight>
    </>);
}

const MyTextImput = props =>{

    return(<View>
        <Text style={labelText}>{props.titulo}</Text>
        <TextInput
            style={textinput}
            {...props}
        />
    </View>);
}

const textinput = { 
    height: 42, 
    borderColor: 'gray',
    borderRadius:5,
    margin:15, 
    marginTop:0,
    borderWidth: 1 
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
const labelText = {
    fontSize:20,
    padding:5,
    marginLeft:20,
    marginBottom:0
}
const botonEnviar= {
    height:40,
    margin:15,
    borderRadius:5,
    textAlign:'center',
    height:42,
    padding:12,
    backgroundColor:'#bdbdbd',
    fontSize:16,
    color:'#fffccc'
}

export default AddPost;