import React, { useState } from 'react';
import { View, Image, ToastAndroid } from 'react-native';
import { Input, Text } from 'galio-framework';
import styles from '../../styles';
import icon from '../../assets/icon/icon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FooterText } from '.';
import { RecoveryPassword } from '../../actions/sesion';
import { useDispatch } from 'react-redux';

const Recuperar = ({navigation}) =>{
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');

    const handleState = value =>{
        setEmail(value);
    }

    const enviar =()=>{
        let patronEmail = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/; 

        if(patronEmail.test(email)){
            dispatch(RecoveryPassword(email,navigation.push('Exito')));
        }
        else ToastAndroid.show('el correo no cumple con el formato.',ToastAndroid.SHORT,ToastAndroid.BOTTOM);

    }


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
                value={email}
                onChangeText={handleState}
            />

            <TouchableOpacity onPress={enviar} style={styles.buttonPrimary}>
                <Text style={styles.textButon}> enviar</Text>
            </TouchableOpacity>
        </View> 
        <FooterText />
    </View>);
}

export default Recuperar;