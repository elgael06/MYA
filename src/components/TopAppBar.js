import React from 'react';
import { NavBar, Text, theme } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useHistory } from 'react-router-native';
import { TouchableOpacity, View } from 'react-native';

export default ({title='',right=null,back=false})=>{
    const history = useHistory();

    return(<View 
        style={{
            backgroundColor:theme.COLORS.FACEBOOK
        }}>
        <NavBar 
            transparent
            left={back ? <TouchableOpacity onPress={history.goBack}>
                <Icon name="chevron-left" color={"#dbd"} size={theme.SIZES.BASE} />
            </TouchableOpacity> :null }   
            right={right}      
            title={<Text style={{color:'#fff'}}> {title} </Text>} 
        />
    </View>);
}