import React from 'react';
import { View, Image } from 'react-native';
import { Input, Text } from 'galio-framework';
import styles from '../../styles';
import icon from '../../assets/icon/icon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FooterText } from '.';

const Exito = ({navigation}) =>{


    return(<View style={styles.app}>
        <View style={styles.container}>
            <Image  
                style={styles.imageIcon}
                source={icon}
            />

            <Text style={styles.textExito} >
                Su peticion se a realizado de forma exitoza.
            </Text>

            <TouchableOpacity onPress={()=>{
                    navigation.pop();
                    navigation.pop();
                }} style={styles.buttonPrimary}>
                <Text style={styles.textButon}> aceptar</Text>
            </TouchableOpacity>
        </View> 
        <FooterText />
    </View>);
}

export default Exito;