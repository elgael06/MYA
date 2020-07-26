import React, { useEffect, useState } from 'react';
import Video from 'react-native-video-controls';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, Alert } from 'react-native';
import { useHistory } from 'react-router-native';


const VideoPaly = () =>{
    const history = useHistory();
    const {descripcion='',uri='',index=-1 } = useSelector(state=>state.series.capitulo);
    const { ListaCapitulos=[]  } = useSelector(state=>state.series);
    const dispatch = useDispatch();

    let reference = null;
    
    useEffect(()=>{
        console.log('play video',descripcion,uri);
    },[])

    const onBuffer =()=>{
        console.log('cargando...');
    }
    const salir = ()=>{
        console.log('salir');
        history.goBack();
    }
    const videoError =()=>{
        console.log('Error');
        Alert.alert('Error de red','El video no se puede reprodicir!',[{text:'Aceptar',onPress:salir}])
    }
    const onEnd = () => {
        if(index<ListaCapitulos.length-1){
            const newVideo = ListaCapitulos[index+1];
            console.log(newVideo.descripcion);
            const value = {
                descripcion:newVideo.descripcion,
                uri:newVideo.uri,
                index:index+1
            }
            dispatch({
                type:'SELECT_CAPITULO',
                value
            });
        }else salir()
    }
    
    return(<>
         <StatusBar  hidden/> 
        <Video 
            title={descripcion}
            fullscreen={false}
            source={{uri:`https://gdurl.com${uri}`}}
            navigator={{
                pop:salir
            }}
            videoStyle={{
                backgroundColor:'#bdbdbd50',
                color:'#f2d40f'
            }}
            onEnd={onEnd}
            seekColor='#f2d40f'
            tapAnywhereToPause={true}
            controlTimeout={3000}
            ref={e=>reference=e}
            resizeMode="cover"
            onBuffer={onBuffer}
            onError={videoError}     
            audioOnly
        />
    </>)
}

export default VideoPaly;

