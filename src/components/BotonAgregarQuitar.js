import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remover, insertar, select } from '../data/database';
import { SeriesFavoritas } from '../actions/series';
import { Button } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';


export default ({ nombre,id })=>{
    const {seriesFavoritas=[]} = useSelector(state=>state.series);
    const [status,setStatus] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        const res = seriesFavoritas.includes(id);
        setStatus(res);
    },[seriesFavoritas]);

    const removeSerieFav = ()=>{
        Alert.alert(
            'Alerta!!!',
            `¿Eliminar de lista por ver?`,
            [
                {
                    text:'CANCELAR'
                },
                {
                    text:'BORRAR',
                    onPress(){
                        setStatus(false);
                        remover().idSerie(id,nombre);
                        const res = seriesFavoritas.filter(e=>e!=id);
                        dispatch(SeriesFavoritas(res));
                    }
                }                
            ]
        )
    }
    const agregar = ()=>{
        setStatus(true);
        insertar().insertarSerie(id,nombre);
        select().favoritas()
        dispatch(SeriesFavoritas([...seriesFavoritas,id]));
    }

    return status ?
    <Button style={{width:45}} round onPress={removeSerieFav} size="small" color='#EEEEEE90'  >
        <Icon name='thumbs-up' color='#8621d9' size={35} />
    </Button>
   : <Button style={{width:45}} round onPress={agregar} size="small" color='#EEEEEE95'  >
        <Icon name='plus-circle' color='#086e1a' size={45} />
    </Button>;
}

