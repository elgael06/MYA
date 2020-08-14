import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Series from '../pages/series';
import Capitulos from '../pages/series/Capitulos';
import VideoPaly from '../pages/series/VideoPlay';
import FiltroSeries from '../pages/series/Filtro';
import Login from '../pages/login';
import CrearUsuario from '../pages/login/CrearUsuario';
import Recuperar from '../pages/login/Recupera';
import Exito from '../pages/login/PantallaExito';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();   

const Nav = () => {
  const {status} = useSelector(e=>e.sesion);
  return (
    <NavigationContainer documentTitle='adv'>
        <Stack.Navigator>       
            {!status ? 
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Login" component={Login} />              
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

export default Nav;