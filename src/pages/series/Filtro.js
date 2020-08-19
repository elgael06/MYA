import React, { useState, useEffect } from 'react';
import { Input, Block } from 'galio-framework';
import LayoutApp from '../../components/LayoutApp';
import TopAppBar from '../../components/TopAppBar';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { getBusqueda } from '../../actions/series';
import CardSerie from '../../components/CardSerie';
import { View } from 'react-native';
import { PublisherBanner } from 'react-native-admob';

const FiltroSeries = ({navigation}) =>{
    const {filtroSeries=[]} = useSelector(state=>state.series);
    const {refreshing=false} = useSelector(state=>state.userInterface);
    const dispatch = useDispatch();
    const [value,setValue] = useState('');

    useEffect(()=>{        
        dispatch({type:'SEARCH',value:[]});
    },[]);

    const handle = e =>{
        setValue(e);
    }
    const buscar = ()=>{
        console.log(`Buscar: ${value}`);
        dispatch(getBusqueda(value));
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
    return (
        <LayoutApp>
            <TopAppBar
            back
            onBack={()=>navigation.pop()}
            title='Bucar Serie.'
            />
            <Block style={{margin:5}}>
                <Input
                    value={value}
                    placeholder='nombre...'
                    right
                    icon='laptop'
                    family="antdesign"
                    iconSize={19}
                    onChangeText={handle}
                    transparent={true}
                    onBlur={buscar}
                />
            </Block>
            <FlatList
                refreshing={refreshing}
                style={{
                    height:310,
                    width:'96%',
                    flex:1,
                    backgroundColor:'#00000060',
                    borderRadius:5,
                    marginStart:10,
                    marginEnd:10,
                    borderColor:'#FFF',
                    borderWidth:2,
                    alignContent:'center',
                    alignSelf:'center'
                }} 
                data={filtroSeries}
                renderItem={({item})=>(<View style={{height:260,width:'100%'}}>
                    <CardSerie item={item} selectSeries={selectSeries} />
                </View> )}
            />
            <PublisherBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-9425276964066348/9719533260"
                didFailToReceiveAdWithError={bannerError}
                admobDispatchAppEvent={adMobEvent} />
        </LayoutApp>
        )
}

export default FiltroSeries;