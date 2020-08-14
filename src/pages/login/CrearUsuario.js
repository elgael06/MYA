import React from 'react';
import { View, Image } from 'react-native';
import { Input, Text } from 'galio-framework';
import styles from '../../styles';
import icon from '../../assets/icon/icon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FooterText } from '.';

const CrearUsuario = ({navigation}) =>{


    return(<View style={styles.app}>
        <View style={styles.container}>
            <Image  
                style={styles.imageIcon}
                source={icon}
            />
             <Input 
                color='#EEE'
                style={styles.input}
                placeholder='Correo'
                placeholderTextColor="#EEE"
            />

            <Input 
               color='#EEE'
               style={styles.input}
               placeholder='Nombre'
               placeholderTextColor="#EEE"
           />

            <Input 
                color='#EEE'
                style={styles.input}
                placeholder='Contraseña'
                placeholderTextColor="#EEE"
            />

            <Input 
                color='#EEE'
                style={styles.input}
                placeholder='Confirmar'
                placeholderTextColor="#EEE"
            />

            <TouchableOpacity onPress={()=>navigation.push('Exito')} style={styles.buttonPrimary}>
                <Text style={styles.textButon}> crear</Text>
            </TouchableOpacity>
        </View> 
        <FooterText />
    </View>);
}

export default CrearUsuario;