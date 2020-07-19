import React from 'react';
import { View, Text} from 'react-native';

import TopAppBar from '../components/TopAppBar';
import Regresar from '../components/Regresar';


const About =()=>{

    return(<View>
        
        <TopAppBar>
            <Regresar />
            <Text style={titleText}>About App.</Text>
        </TopAppBar>

        <View style={{
            padding:20,
            textAlign:'center'
        }}>
            <Text>Este es el componente About.</Text>
        </View>
    </View>);
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

export default About;