import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { Image, FlatList, Text, View, TouchableOpacity, Alert } from 'react-native';
import { getCapitulos } from '../../actions/capitulos';
import LayoutApp from '../../components/LayoutApp';
import { 
    AdMobBanner, 
    AdMobInterstitial, 
    PublisherBanner,
    AdMobRewarded
  } from 'react-native-admob';

const Capitulos = ({navigation}) =>{
    const {
        serie:{
            nombre,
            portada,
            capitulos
        },
        ListaCapitulos=[],
        refreshing=false  } = useSelector(state=>state.series);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCapitulos());
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

    return(
        <LayoutApp>
            <TopAppBar 
                back
                onBack={()=>navigation.pop()}    
                title={nombre}                 
            />
            <PublisherBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-9425276964066348/8203255709"
                    didFailToReceiveAdWithError={bannerError}
                    admobDispatchAppEvent={adMobEvent} />

        <PublisherBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-9425276964066348/8203255709"
                didFailToReceiveAdWithError={bannerError}
                admobDispatchAppEvent={adMobEvent} />

        <PublisherBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-9425276964066348/8203255709"
                didFailToReceiveAdWithError={bannerError}
                admobDispatchAppEvent={adMobEvent} />

        <PublisherBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-9425276964066348/8203255709"
                didFailToReceiveAdWithError={bannerError}
                admobDispatchAppEvent={adMobEvent} />

        <PublisherBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-9425276964066348/8203255709"
                didFailToReceiveAdWithError={bannerError}
                admobDispatchAppEvent={adMobEvent} />
                <PublisherBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-9425276964066348/8203255709"
                        didFailToReceiveAdWithError={bannerError}
                        admobDispatchAppEvent={adMobEvent} />
                        <PublisherBanner
                                bannerSize="smartBannerPortrait"
                                adUnitID="ca-app-pub-9425276964066348/8203255709"
                                didFailToReceiveAdWithError={bannerError}
                                admobDispatchAppEvent={adMobEvent} />
                                <PublisherBanner
                                        bannerSize="smartBannerPortrait"
                                        adUnitID="ca-app-pub-9425276964066348/8203255709"
                                        didFailToReceiveAdWithError={bannerError}
                                        admobDispatchAppEvent={adMobEvent} />
                                        <PublisherBanner
                                                bannerSize="smartBannerPortrait"
                                                adUnitID="ca-app-pub-9425276964066348/8203255709"
                                                didFailToReceiveAdWithError={bannerError}
                                                admobDispatchAppEvent={adMobEvent} />
            <Image source={{uri:portada}} style={{position:'absolute',top:62,bottom:0,left:0,right:0}} />            
            {capitulos ? <FlatList 
                refreshing={refreshing}
                onRefresh={()=>dispatch(getCapitulos())}
                style={{padding:10,backgroundColor:'#dbdbdb80',margin:10,borderRadius:5,position:'absolute',top:62,bottom:10,left:0,right:0}}
                data={ListaCapitulos}
                renderItem={({item,index})=>{
                    
                    const alerta = ()=>Alert.alert(`Alerta `,"Reproducir: "+item.descripcion,
                        [{text:'NO'},{text:'SI',onPress:()=>payVideo(item.descripcion,item.uri,index,item.id)}]
                    );
                    
                    return (<TouchableOpacity onLongPress={alerta} onPress={alerta}
                        style={
                            {height:50,marginBottom:20,borderWidth:1,padding:10,backgroundColor:'#00000080',borderRadius:5}
                        }>
                        <Text style={{fontSize:18,color:'#fff'}}>{item.descripcion}</Text>
                    </TouchableOpacity>)
                }}
            /> : <View style={{padding:40,backgroundColor:'#dbdbdb80',textAlign:'center'}}>
                <Text style={{fontSize:20}}>Sin capitulos por el momento!!!</Text>
            </View>}
            {/* <PublisherBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-9425276964066348/9719533260"
                didFailToReceiveAdWithError={bannerError}
                admobDispatchAppEvent={adMobEvent} /> */}
        </LayoutApp>
    );
}



export default Capitulos;

