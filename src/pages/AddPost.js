import React from 'react';
import { View, TextInput, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Regresar from '../components/Regresar';

const AddPost = () =>{

    return(<View>
        <Regresar />
        <Text style={titleText}>Nuevo Post</Text>
        <Text style={labelText}>Titulo</Text>
        <TextInput
            style={textinput}
        />
        <Text style={labelText}>Descripcion</Text>
        <Text 
            style={textinput}
        />
        <Text style={labelText}>Cuerpo</Text>
        <Text 
            style={textinput}
        />
        <Text style={labelText}>Url Imagen</Text>
        <Text
            style={textinput}
        />
        <TouchableHighlight >
            <Text style={botonEnviar}>Guardar</Text>
        </TouchableHighlight>
    </View>);
}

const textinput = { 
    height: 42, 
    borderColor: 'gray',
    borderRadius:10,
    padding:12,
    margin:15, 
    borderWidth: 1 
}
const titleText ={
    fontSize:30,
    padding:15,
    margin:10,
    textAlign:'center',
    marginBottom:40
}
const labelText = {
    fontSize:20,
    padding:5,
    marginLeft:20,
    marginBottom:-15
}
const botonEnviar= {
    height:40,
    margin:5,
    borderRadius:12,
    textAlign:'center',
    height:42,
    padding:12,
    backgroundColor:'#bdbdbd',
    fontSize:16,
    color:'#fffccc'
}

export default AddPost;