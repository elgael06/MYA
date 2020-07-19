import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

const MyTextInput =props =>{

    useEffect(() => {
        //console.log(props.value)
        //props.value || moverTitulo();
    }, [props.value])
    //metodos de stilos
    const moverTitulo = ()=>{
        labelText.marginBottom = 30
    }
    //eventos
    const focus =()=>{
        console.log('focus.')
    }
    const blur =()=>{
        console.log('blur.')
    }
    return(<View>
        <Text style={labelText}>{props.titulo}</Text>
        <TextInput
            onFocus={focus}
            onBlur={blur}
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
const labelText = {
    fontSize:20,
    padding:5,
    marginLeft:20,
    marginBottom:0
}
export default MyTextInput;