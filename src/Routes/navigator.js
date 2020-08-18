import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Series from '../pages/series';
import Capitulos from '../pages/series/Capitulos';
import VideoPaly from '../pages/series/VideoPlay';
import FiltroSeries from '../pages/series/Filtro';
import Login, { FooterText } from '../pages/login';
import CrearUsuario from '../pages/login/CrearUsuario';
import Recuperar from '../pages/login/Recupera';
import Exito from '../pages/login/PantallaExito';
import { useSelector, useDispatch } from 'react-redux';
import { getSesionFromStorange } from '../actions/sesion';
import { View, Text, Image } from 'react-native';
import styles from '../styles';
import icon from '../assets/icon/icon.png';

const Stack = createStackNavigator();   

const Nav = () => {
  const {status,checking=false} = useSelector(e=>e.sesion);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getSesionFromStorange());
  },[]);

  return (
    <NavigationContainer documentTitle='adv'>
        <Stack.Navigator>       
            {!status ? 
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Login" component={checking ? Login : CheckData} />              
            : <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Series" component={Series} /> }
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Capitulos" component={Capitulos} />
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="FiltroSeries" component={FiltroSeries} />
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="VideoPaly" component={VideoPaly} />

            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="CrearUsuario" component={CrearUsuario} />     
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Recuperar" component={Recuperar} />         
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Exito" component={Exito} />     
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export const CheckData = ()=>{
  return(
    <View style={styles.app}>
              <View style={styles.container}>
            <Image  
                style={styles.imageIcon}
                source={icon}
            />
            <Text style={styles.textExito} >
                Cargando app...
            </Text>
        </View> 
        <FooterText />
    </View>
  );
}

export default Nav;