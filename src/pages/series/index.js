import React, { useEffect, Fragment } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { View, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { Text } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries, getTopSeries } from '../../actions/series';
import LayoutApp from '../../components/LayoutApp';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VistaLista from '../../components/VistaLista';
import { 
    PublisherBanner,
  } from 'react-native-admob';


const Series = ({navigation})=>{
    const {lista=[],listaTop=[]} = useSelector(state=>state.series);
    const {refreshing=false} = useSelector(state=>state.userInterface);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(refreshing)
            fetchData();
            // AdMobInterstitial.setAdUnitID("ca-app-pub-9425276964066348/9516337370");
            // AdMobInterstitial.setTestDeviceID('EMULATOR');
            
    },[refreshing]);

    const fetchData = ()=> {
        dispatch(getSeries());
        dispatch(getTopSeries(5));
    }

    const selectSeries = value => {
        console.log(value.nombre);
        dispatch({
            type:'SELECT_SERIE',
            value:{...value}
        });
        navigation.navigate('Capitulos');
    }
    const bannerError =()=>{
        console.log('fallo baner');
    }
    const adMobEvent =()=>{
        console.log('event baner.');
    }

    return(<LayoutApp>
        <TopAppBar title='Inicio' right={<TouchableOpacity style={{marginLeft:100}} onPress={()=>navigation.push('FiltroSeries')}> 
                <Icon color={"#EEE"} name='search' size={23} />
            </TouchableOpacity>} 
        />
        
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchData} />}>
        { refreshing ? null
        :<Fragment>
            <VistaLista 
                title={`${listaTop.length} Nuevas series`}
                lista={listaTop}
                selectSeries={selectSeries}
            />
            <VistaLista 
                title={`${lista.length} Series`}
                lista={lista}
                selectSeries={selectSeries}
            />
            <VistaLista 
                title={`Lista ${lista.length} series`}
                lista={lista}
                selectSeries={selectSeries}
            />
        </Fragment>
        }
        <View style={{flex:1,height:80,alignContent:'center',alignItems:'center',padding:40}}>
            <Text style={{color:'#EEE'}}>By elgael.</Text>
        </View>
        
   
        </ScrollView>
        <PublisherBanner
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-9425276964066348/8203255709"
            didFailToReceiveAdWithError={bannerError}
            admobDispatchAppEvent={adMobEvent} />
                
    </LayoutApp>);
};


export default Series;



