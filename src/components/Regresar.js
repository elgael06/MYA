import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { useHistory } from 'react-router-native';

export default()=>{
    const history = useHistory();

    return(<View style={touch}>
        <TouchableHighlight style={{position:'absolute'}} onPress={()=>history.goBack()}>
            <Text style={textRegresar} >Regresar</Text>
        </TouchableHighlight>
    </View>
    );
}

const touch={
    color:'#bdbdbd',
    margin:20,
    display:'flex',
    borderColor: 'gray',
    borderWidth: 1 ,
    height:30,
    width:60,
    position:'absolute'
}

const textRegresar ={
    margin:20,
    display:'flex',
    borderColor: 'gray',
    borderWidth: 1 ,
    color:'#bdbdbd',
    height:30,
    width:60,
    position:'relative'
}