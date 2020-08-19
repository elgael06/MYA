import React from 'react';
import { View } from "react-native";
import styles from '../styles/';
import { Text } from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';



const MenuAcction = ({actions=[],open=false,onClose=e=>e}) =>{

    return open ? (
        <View  style={[styles.app,{backgroundColor:'rgba(0, 0, 0, 0.5)'}]} >
            <View style={[styles.container,styles.menuContainer]}>
                <Text style={[styles.footerText,styles.menuTitle]}>Menu</Text>

                <View style={styles.menuBotones}>                    
                    {actions.map(e=> <BotonMenu key={e.title} {...e} />)}
                </View>

                <BotonMenu 
                    title='Cancelar'
                    action={onClose}
                />

            </View>
        </View>
    ) : null;
}

const BotonMenu = ({
    title='',
    action=e=>e
}) =><TouchableOpacity onPress={action} style={[styles.botonMenu]}>
<Text style={styles.menuTextBoton}>{title}</Text>
</TouchableOpacity>


export default MenuAcction;