import React from 'react';
import { NavBar, Text, theme } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useHistory } from 'react-router-native';
import { TouchableOpacity } from 'react-native';

export default ({title='',right=null,back=false})=>{
    const history = useHistory();

    return(<>
        <NavBar          
            left={back ? <TouchableOpacity onPress={history.goBack}>
                <Icon name="chevron-left" color={"#dbd"} size={theme.SIZES.BASE} />
            </TouchableOpacity> :null }   
            right={right}      
            title={title} 
        />
    </>);
}