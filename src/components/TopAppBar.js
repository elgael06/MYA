import React from 'react';
import { NavBar, Text, theme } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useHistory } from 'react-router-native';
import { TouchableOpacity, View } from 'react-native';

export default ({title='',right=null,back=false,onBack=null})=>{
    const history = useHistory();

    return(<View 
        style={{
            backgroundColor:'#222831',
            borderBottomEndRadius:10,
            borderBottomStartRadius:10,
            height:50
        }}>
        <NavBar
            style={{marginTop:-15}}
            transparent
            left={back ? <TouchableOpacity onPress={onBack}>
                <Icon name="arrow-left" color={"#EEE"} size={19} />
            </TouchableOpacity> :null }   
            right={right}      
            title={<Text style={{color:'#EEE',fontSize:20}}> {title} </Text>} 
        />
    </View>);
}