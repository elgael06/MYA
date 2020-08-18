import React, { useEffect, Fragment, useState } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { View, ScrollView, RefreshControl, ToastAndroid } from 'react-native';
import { Text } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries, getTopSeries } from '../../actions/series';
import LayoutApp from '../../components/LayoutApp';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VistaLista from '../../components/VistaLista';
import { PublisherBanner } from 'react-native-admob';
import styles from '../../styles';
import MenuAcction from '../../components/MenuAcction';
import { removerSesion } from '../../actions/sesion';


const Series = ({navigation})=>{
    const {lista=[],listaTop=[],seriesFavoritas=[]} = useSelector(state=>state.series);
    const {refreshing=false} = useSelector(state=>state.userInterface);
    const [openMenu,setOpenMenu] = useState(false); 
    const dispatch = useDispatch();

    useEffect(()=>{
        if(refreshing)
            fetchData();            
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
    const listaFavoritas = () => lista.filter(e=>{

        return seriesFavoritas.includes( e.id );
    })

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

            <AddMond
                id="ca-app-pub-9425276964066348/8203255709"
                bannerError={bannerError}
                adMobEvent={adMobEvent}
            />
            <VistaLista 
                title={`${lista.length} Series`}
                lista={lista}
                selectSeries={selectSeries}
            />

            <AddMond
                id="ca-app-pub-9425276964066348/9719533260"
                bannerError={bannerError}
                adMobEvent={adMobEvent}
            />
            <VistaLista 
                title={`Por ver ${listaFavoritas().length} series`}
                lista={listaFavoritas()}
                selectSeries={selectSeries}
            />
            <AddMond
                id="ca-app-pub-9425276964066348/8203255709"
                bannerError={bannerError}
                adMobEvent={adMobEvent}
            />
        </Fragment>
        }
        <View style={{flex:1,height:80,alignContent:'center',alignItems:'center',padding:40}}>
            <Text style={{color:'#EEE'}}>By elgael.</Text>
        </View>
       
        </ScrollView>

        <TouchableOpacity onPress={()=>setOpenMenu(true)} style={[styles.floatButton,{backgroundColor:'#03A1FA'}]}>
            <Icon name='ellipsis-v' size={25} color='#EEEEEE' /> 
        </TouchableOpacity>  
        <MenuAcction
            open={openMenu}
            onClose={()=>setOpenMenu(false)}
            actions={[
                {
                    title:'Usuarios',
                    action:()=>ToastAndroid.show('Tranquilo viejo, aun no esta disponible',ToastAndroid.SHORT,ToastAndroid.CENTER)},
                {
                    title:'Buscar Series',
                    action:()=>{
                        navigation.push('FiltroSeries')
                        setOpenMenu(false);
                    }
                },
                {title:'Salir',action:()=>dispatch(removerSesion())}
            ]}
        />
    </LayoutApp>);
};

const AddMond = ({id,bannerError,adMobEvent})=>{
    return  <View style={{justifyContent:'center',alignItems:'center'}}>
        <PublisherBanner
            bannerSize="fullBanner"
            bannerSize="smartBannerPortrait"
            adUnitID={id}
            didFailToReceiveAdWithError={bannerError}
            admobDispatchAppEvent={adMobEvent} 
        />
    </View>
}

export default Series;



