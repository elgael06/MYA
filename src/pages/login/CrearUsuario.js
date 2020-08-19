import React, { useState } from 'react';
import { View, Image, ToastAndroid } from 'react-native';
import { Input, Text } from 'galio-framework';
import styles from '../../styles';
import icon from '../../assets/icon/icon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FooterText } from '.';
import { useSelector, useDispatch } from 'react-redux';
import { CheckData } from '../../Routes/navigator';
import { fetchAddSesion } from '../../actions/sesion';

const defaultUsuario = {
    correo:'',
    nombre:'',
    passw:'',
    confirm:''
}


const CrearUsuario = ({navigation}) =>{
    const {refreshing=false} = useSelector(state=>state.userInterface);
    const [usuario ,setUsuario] = useState(defaultUsuario); 
    const dispatch = useDispatch();

    const handleValue = label => value =>{
        const val = {};
        val[label] = value;
        setUsuario({...usuario,...val});
    }

    const CrearUsuario = () =>{
        if(
            usuario.correo &&
            usuario.passw &&
            usuario.passw==usuario.confirm &&
            usuario.nombre
        ){
            dispatch( fetchAddSesion(usuario.correo,usuario.passw,usuario.nombre,()=>{
                navigation.push('Exito');
            }) )
        }else {
            ToastAndroid.show('falta capturar datos',ToastAndroid.SHORT,ToastAndroid.BOTTOM)
        }
    }

    return !refreshing ? (<View style={styles.app}>
        <View style={styles.container}>
            <Image  
                style={styles.imageIcon}
                source={icon}
            />

             <Input 
                value={usuario.correo}
                color='#EEE'
                type='email-address'
                style={styles.input}
                placeholder='Correo'
                placeholderTextColor="#EEE"
                onChangeText={handleValue('correo')}
            />

            <Input 
                value={usuario.nombre}
               color='#EEE'
               style={styles.input}
               placeholder='Nombre'
               placeholderTextColor="#EEE"
               onChangeText={handleValue('nombre')}
           />

            <Input 
                value={usuario.passw}
                color='#EEE'
                style={styles.input}
                password={true}
                placeholder='Contraseña'
                placeholderTextColor="#EEE"
                onChangeText={handleValue('passw')}
            />

            <Input 
                value={usuario.confirm}
                color='#EEE'
                style={styles.input}
                placeholder='Confirmar'
                password={true}
                placeholderTextColor="#EEE"
                onChangeText={handleValue('confirm')}
            />

            <TouchableOpacity onPress={CrearUsuario} style={styles.buttonPrimary}>
                <Text style={styles.textButon}> crear</Text>
            </TouchableOpacity>
        </View> 
        <FooterText />
    </View>) : <CheckData />;
}

export default CrearUsuario;