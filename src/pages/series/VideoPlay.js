import React, { useEffect, useState } from 'react';
import Video from 'react-native-video-controls';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, Alert, View } from 'react-native';
import LayoutApp from '../../components/LayoutApp';


const VideoPaly = ({navigation}) =>{
    const {descripcion='',uri='',index=-1 } = useSelector(state=>state.series.capitulo);
    const { ListaCapitulos=[]  } = useSelector(state=>state.series);
    const [cargando,setCargando] = useState(false);
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
        navigation.push('Series');
    }
    const videoError =(err)=>{
        console.log('Error',err);
        Alert.alert('Error de red','El video no se puede reprodicir!',[{text:'Aceptar',onPress:salir}])
    }
    const onEnd = () => {
        console.log('salir');
        setCargando(true);
        if(index<ListaCapitulos.length-1){
            setTimeout(()=>setCargando(false),200);
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
         <StatusBar   hidden/> 
         <LayoutApp>
         {cargando ? null : <Video 
            title={descripcion}
            fullscreen={false}
            source={{uri:uri}}
            navigator={{
                pop:salir,

            }}
            videoStyle={{
                backgroundColor:'#bdbdbd50',
            }}
            onEnd={onEnd}
            seekColor='#f2d40f'
            tapAnywhereToPause={true}
            ref={e=>reference=e}
            resizeMode="cover"
            onBuffer={onBuffer}
            onError={videoError}     
            audioOnly

        /> }
        </LayoutApp>
    </>)
}

export default VideoPaly;

