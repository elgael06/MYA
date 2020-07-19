import React from 'react';
import { View } from 'react-native';

export default ({backgroundColor='#FFF',borderColor='#bdb',children})=>{
    return(
        <View 
        style={
            {
                borderStyle:'dashed',
                borderColor,
                backgroundColor,
                borderWidth:1,padding:10,
                height:70,
            }
        }>
            {children}
       </View>
    );
}