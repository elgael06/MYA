import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Text, View, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { getCapitulos } from '../../actions/capitulos';
import LayoutApp from '../../components/LayoutApp';

import { 
    PublisherBanner
  } from 'react-native-admob';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/FontAwesome';
import BotonAgregarQuitar from '../../components/BotonAgregarQuitar';

const Capitulos = ({navigation}) =>{
    const {
        serie:{
            id,
            nombre,
            portada,
        },
        ListaCapitulos=[] } = useSelector(state=>state.series);

    const {refreshing=false} = useSelector(state=>state.userInterface);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchData()
    },[]);

    const payVideo = (descripcion,uri,index,id) => {
        console.log( descripcion,'uri=>',uri);
        const value = {
            descripcion,
            uri,
            index,
            id
        }
        dispatch({
            type:'SELECT_CAPITULO',
            value
        });
        console.log('ir a video'); 
        navigation.navigate('VideoPaly');
    }
    const bannerError =()=>{
        console.log('fallo baner');
    }
    const adMobEvent =()=>{
        console.log('event baner.');
    }
    const fetchData = ()=>dispatch(getCapitulos());

    return(
        <LayoutApp>
            <TopAppBar 
                back
                onBack={()=>navigation.pop()}    
                title={nombre}
                right={ <BotonAgregarQuitar id={id} nombre={nombre} />}

            />

            <Image source={{uri:portada}} style={{position:'absolute',top:62,bottom:0,left:0,right:0}} />   
            <ScrollView style={{marginTop:40}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchData} />}>
            {!refreshing  ?  
            ListaCapitulos.map((item,index)=>{
                const alerta = ()=>Alert.alert(`Reproducir `,"Capitulo: "+item.descripcion,
                        [{text:'NO'},{icon:<Icon  style={{flexDirection:'column-reverse',right:10}} name='play' size={23} color={"#EEE"}  />,text:'SI',onPress:()=>payVideo(item.descripcion,item.uri,index,item.id)}]
                    );
                    
                    return (<TouchableOpacity key={index} onLongPress={alerta} onPress={alerta}
                        style={{
                            flex:1,
                            minHeight:70,
                            marginBottom:10,
                            borderWidth:1,
                            padding:10,
                            backgroundColor:'#00000080',
                            borderRadius:5,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                            marginEnd:10,
                            marginStart:10
                        }}>

                        <Icon  style={{flexDirection:'column-reverse',right:10,filter: 'blur(6px)'}} name='play' size={23} color={"#EEE"}  />
                        <Text style={{fontSize:18,color:'#fff'}}>Capitulo {item.descripcion}</Text>
                    </TouchableOpacity>)
                    })
                    : ListaCapitulos? null: <View style={{padding:40,backgroundColor:'#dbdbdb80',textAlign:'center'}}>
                        <Text style={{fontSize:20}}>Sin capitulos por el momento!!!</Text>
                    </View>
                    
                }            
            </ScrollView>      

            <PublisherBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-9425276964066348/8203255709"
                    didFailToReceiveAdWithError={bannerError}
                    admobDispatchAppEvent={adMobEvent} />
        </LayoutApp>
    );
}



export default Capitulos;

