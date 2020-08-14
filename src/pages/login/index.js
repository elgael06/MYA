import { View, Image } from  "react-native";
import React, { useState } from 'react';
import { Text, Input } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";
import icon from '../../assets/icon/icon.png';
import styles from "../../styles";
import { changeStatus } from "../../actions/sesion";
import { useDispatch } from "react-redux";

const initialState ={
    email:'',
    pass:''
}

const Login = ({navigation})=>{
    const [usuario, setusuario] = useState(initialState);
    const dispatch = useDispatch();

    const handleValue = input => value =>{
        const val = {};
        val[input] = value;
        setusuario({...usuario,...val});
    }
    
    const enviarSesion = ()=>{

        console.log('inicio sesion');
        dispatch(changeStatus(true));
    }

    return (<View style={styles.app}>
        <View style={styles.container}>
            <Image  
                style={styles.imageIcon}
                source={icon}
            />

            <Input 
                color='#EEE'
                style={styles.input}
                placeholder='Email'dskd
                placeholderTextColor="#EEE"
                type='email-address'
                value={usuario.email}
                onChangeText={handleValue('email')}
            />

            <Input 
                color='#EEE'
                style={styles.input}
                password={true}
                placeholder='Contraseña'
                placeholderTextColor="#EEE"
                value={usuario.pass}
                onChangeText={handleValue('pass')}
            />

            <TouchableOpacity onPress={enviarSesion} style={styles.buttonPrimary}>
                <Text style={styles.textButon}> Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.push('CrearUsuario')} style={styles.actionText}>
                <Text style={styles.textAction}>Crear cuenta.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.push('Recuperar')} style={styles.actionText}>
                <Text style={styles.textAction}>Recuperar contraseña.</Text>
            </TouchableOpacity>
        </View>
        <FooterText />
    </View>);
}

export const FooterText = ()=> <View style={styles.fotter}>
    <Text style={styles.footerText}>MYA app</Text>
    <Text style={styles.footerText}>series y peliculas online. </Text>
</View>


export default Login;