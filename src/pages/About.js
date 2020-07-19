import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';


const About =()=>{
    const history = useHistory();

    const retunHome = ()=>{
        history.goBack();
    }
    return(<View>
        <TouchableOpacity onPress={retunHome}>
            <Text style={{
            height:60,
            margin:30,
            textAlign:'center',
            backgroundColor:'#fff',
            fontSize:25,
            marginTop:10
        }} >About</Text>
        </TouchableOpacity>
        <View style={{
            padding:20,
            textAlign:'center'
        }}>
            <Text>Este es el componente About.</Text>
        </View>
    </View>);
}

export default About;