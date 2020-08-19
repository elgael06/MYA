import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyBotton = props =>{
    const {
        onPress=e=>e,
        onPressIn=e=>e,
        onPressOut=e=>e,
        onLongPress=e=>e,
    } = props;
    return(
        <TouchableOpacity 
            onPress={onPress} 
            onPressIn={onPressIn} 
            onPressOut={onPressOut}
            onLongPress={onLongPress}
        >
            <Text style={botonEnviar}>{props.text}</Text>
        </TouchableOpacity>
    );
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

export default MyBotton;