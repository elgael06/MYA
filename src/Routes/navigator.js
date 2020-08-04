import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Series from '../pages/series';
import Capitulos from '../pages/series/Capitulos';
import VideoPaly from '../pages/series/VideoPlay';
import FiltroSeries from '../pages/series/Filtro';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer documentTitle='adv'>
        <Stack.Navigator>
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Series" component={Series} />
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="Capitulos" component={Capitulos} />
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="FiltroSeries" component={FiltroSeries} />
            <Stack.Screen options={{header:()=>null,gestureEnabled:true,gestureDirection:'horizontal',animationTypeForReplace:"push"}} name="VideoPaly" component={VideoPaly} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;