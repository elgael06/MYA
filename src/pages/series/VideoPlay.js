import React, { useEffect, useState } from 'react';
import Video from 'react-native-video-controls';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, Alert, View } from 'react-native';
import LayoutApp from '../../components/LayoutApp';
import { Button } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
        navigation.pop();
    }
    const videoError =(err)=>{
        console.log('Error',err);
        Alert.alert('Error de red','El video no se puede reprodicir!',[{text:'Aceptar',onPress:salir}])
    }
    const onEnd = () => {
        console.log('salir',index,ListaCapitulos.length);
        setCargando(true);
        if(index<ListaCapitulos.length-1){
            avanzarVideo();
        }else salir()
    }
    const avanzarVideo = () =>{
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
    }
    
    return(<>
         <StatusBar   hidden/> 
         <LayoutApp>
         {cargando ? null : <Video 
            fullscreenOrientation='portrait'
            title={descripcion}
            fullscreen={true}
            source={{uri:uri}}
            navigator={{
                pop:salir,

            }}
            videoStyle={{
                backgroundColor:'#bdbdbd50',
            }}
            onEnd={onEnd}
            seekColor='#f2d40f'
            ref={e=>reference=e}
            onBuffer={onBuffer}
            onError={videoError}     
            audioOnly
            
        /> }
        <View style={{position:'absolute',right:10,width:20,bottom:50}}>
            <TouchableOpacity style={{height:20,with:15}} onLongPress={onEnd} >
                <Icon name='step-forward' color='#EEE' size={20} />
            </TouchableOpacity>
        </View>

        </LayoutApp>
    </>)
}

export default VideoPaly;

