import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { SeriesFavoritas } from '../actions/series';
import { insertar,select } from '../data/database';

const CardSerie = ({item,selectSeries=e=>e})=>{
    const {seriesFavoritas=[]} = useSelector(state=>state.series);
    const [status,setStatus] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const res = seriesFavoritas.includes(item.id);
        setStatus(res);
    },[seriesFavoritas]);

    const removeSerieFav = ()=>{
        setStatus(false);
        const res = seriesFavoritas.filter(e=>e!=item.id);
        dispatch(SeriesFavoritas(res));
    }
    const agregar = ()=>{
        setStatus(true);
        insertar().insertarSerie(item.id);
        select().favoritas()
        dispatch(SeriesFavoritas([...seriesFavoritas,item.id]));
    }
    
    return(<View style={{
        flex:1,
        backgroundColor:'#00000015',
        margin:10,
        width:'100%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#bdbdbd95',
        position:'relative'
    }} >

        <Image style={{flex:1,borderRadius:5,position:'absolute',height:'100%',width:'100%'}} source={{uri:item.portada}} />
        <Block style={{position:'absolute',width:'90%',borderRadius:5,marginLeft:5,top:20,backgroundColor:'#00000070'}}>
            <Text style={{fontSize:15,color:'#FFF',padding:5}}>{item.nombre}</Text>
            <Text style={{padding:5,marginTop:20,fontSize:12,color:'#FFF'}}>Cap. : {item.capitulos}</Text>
        </Block>
        
        <View  style={{flex:1,flexDirection:'row-reverse',alignItems:'flex-end'}} >
           {status ?
            <Button style={{width:45}} round onPress={removeSerieFav} size="small" color='#EEEEEE90'  >
                <Icon name='close' color='red' size={25} />
            </Button>
           : <Button style={{width:45}} round onPress={agregar} size="small" color='#EEEEEE90'  >
                <Icon name='bookmark' color='#f7aa3e' size={25} />
            </Button>}
            
            <Button style={{width:45,fex:1}} round onPress={()=>selectSeries(item)} size="small" color='#393e4670'  >
                <Icon name='list' color='#EEE' size={25} />
            </Button>
        </View>

    </View>);
}

export default CardSerie;