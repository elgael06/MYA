import React from 'react';
import { TouchableHighlight, Text, View, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';

export default()=>{
    const history = useHistory();

    return(<View style={touch}>
        <TouchableOpacity style={{position:'absolute'}} onPress={()=>history.goBack()}>
            <Text style={textRegresar} >Regresar</Text>
        </TouchableOpacity>
    </View>
    );
}

const touch={
    color:'#bdbdbd',
    margin:10,
    display:'flex',
    height:30,
    width:60,
}

const textRegresar ={
    textAlign:'center',
    marginTop:8,    
    color:'gray',
    height:30,
    width:60,
    position:'relative'
}