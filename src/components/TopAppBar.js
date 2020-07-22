import React from 'react';
import { View } from 'react-native';
import { NavBar, Text, theme } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useHistory } from 'react-router-native';
import { TouchableOpacity } from 'react-native';

export default ({backgroundColor='#FFF',borderColor='#bdb',title='',children})=>{
    const history = useHistory();

    return(<>
        <NavBar
            back={true}
            left={<TouchableOpacity onPress={history.goBack}>
                <Icon name="chevron-left" color={"#dbd"} size={theme.SIZES.BASE} />
            </TouchableOpacity> }         
            title={title} 
        />
    </>);
}