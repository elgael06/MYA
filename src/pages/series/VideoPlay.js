import React, { useEffect, useState } from 'react';
import Video from 'react-native-video-controls';
import {apiVideo} from '../../../package.json'
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { useHistory } from 'react-router-native';


const VideoPaly = () =>{
    const history = useHistory();
    const {title='',uri='' } = useSelector(state=>state.series.capitulo);
    const [url ,setUrl] = useState('https://gdurl.com/CJkl/download');

    let reference = null;
    
    useEffect(()=>{
        const value = apiVideo.uri+uri;
        console.log('play video',value);
        setUrl(value);

    },[])

    const onBuffer =()=>{
        console.log('cargando...');
    }
    const videoError =()=>{
        console.log('Error');
    }
    const salir = ()=>{
        console.log('salir');
        history.goBack();
        }
    
    return(<>
         <StatusBar  hidden/> 
        <Video 
            fullscreen
            source={{uri:url}}
            navigator={{
                pop:salir
            }}

            ref={e=>reference=e}
            resizeMode="cover"                                                     // Store reference
            onBuffer={onBuffer}                // Callback when remote video is buffering
            onError={videoError}     
            audioOnly
            fullscreen={false}
        />
    </>)
}

export default VideoPaly;

