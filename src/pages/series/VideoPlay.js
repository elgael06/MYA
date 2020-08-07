import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, Alert, View, Dimensions, Text } from 'react-native';
import WebView from 'react-native-webview';
import LayoutApp from '../../components/LayoutApp';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';


const VideoPaly = ({navigation}) =>{
    const {descripcion='',uri='',index=-1 } = useSelector(state=>state.series.capitulo);
    const { ListaCapitulos=[]  } = useSelector(state=>state.series);
    const [cargando,setCargando] = useState(false);
    const dispatch = useDispatch();
    const [pathLink,setPath] = useState('');

    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    // let reference = null;
    
    useEffect(()=>{
        console.log('play video',descripcion,uri);
    },[]);

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
    
    return(<><LayoutApp>
         <StatusBar   hidden={true}/> 
         {cargando ? null : 
        <WebView 
            style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
            }}
            source={{ html: !uri.includes('https://mega.nz') ? `
                <video width='100%' height='100%' style='position:'absolute';top: '0px'; left: '0px'; right: 0px; bottom: '0px';' controls >
                    <source src="${uri}">
                    Your App does not support video.
                </video>
            ` : `
            <iframe 
                width='100%' height='100%' style='position:'absolute';top: '0px'; left: '0px'; right: 0px; bottom: '0px';'
                frameborder="0" 
                src="${uri}" 
                allowfullscreen 
                allow="autoplay;"></iframe>
            ` }}
        />
         }

        <View style={{position:'absolute',left:5,width:45,top:2,zIndex:9999}}>
            <TouchableOpacity style={{height:25,with:8}} onPress={salir} >
                <Icon style={{padding:5}} name='times-circle' color='#EEEEEE70' size={21} />
            </TouchableOpacity>
        </View>
        <View style={{position:'absolute',left:45,width:45,top:8,zIndex:9999}}>
        <Text style={{color:'#EEEEEE70'}}>{descripcion}</Text>
        </View>
        <View style={{position:'absolute',right:10,width:45,top:2,zIndex:9999}}>
            <TouchableOpacity style={{height:25,with:4}} onPress={onEnd} >
                <Text style={{padding:5,color:'#EEEEEE70'}}>SIG.
                <Icon style={{padding:5}} name='step-forward' color='#EEEEEE70' size={17} />
                </Text>
            </TouchableOpacity>
        </View>

        </LayoutApp>
    </>)
}

export default VideoPaly;

/**
    "react-native-video": "^4.4.5",
    "react-native-video-controls": "^2.6.0",
    "react-native-video-player": "^0.10.1",
    "react-native-vlc-player": "^0.2.3",

// import VlcPlayer from 'react-native-vlc-player';
// import NativeVlcPlayer from 'react-native-vlc-player/src/NativeVlcPlayer';
// import Video from 'react-native-video-controls';

//  <NativeVlcPlayer 
        //     ref={re=>reference=re}
        //     autoplay={true}
        //     style={{
        //         position: 'absolute',
        //         top: 0, left: 0, right: 0, bottom: 0,
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         backgroundColor: 'transparent'
        //     }}

        //   source={{
        //     uri: uri,
        //     autoplay: true,
        //     initOptions: ['--codec=avcodec'],
        //   }}
        //   onVLCEnded={onEnd}
        //   onVLCError={videoError}

        //  />
        //  <Video 
        //     fullscreenOrientation='portrait'
        //     title={descripcion}
        //     fullscreen={true}
        //     source={{
        //         uri:uri,
        //         autoplay: true,
        //         initOptions: ['--codec=avcodec'],
        //     }}
        //     navigator={{pop:salir}}
        //     videoStyle={{
        //         backgroundColor:'#bdbdbd50',
        //     }}
        //     onEnd={onEnd}
        //     seekColor='#f2d40f'
        //     ref={e=>reference=e}
        //     onBuffer={onBuffer}
        //     onError={videoError}     
        //     audioOnly                        
        // />
        
    
*/

