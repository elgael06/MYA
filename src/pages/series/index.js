import React, { useEffect, Fragment } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { FlatList, Image, View, ScrollView, RefreshControl } from 'react-native';
import { Block, Text, Button, theme,DeckSwiper } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries, getTopSeries } from '../../actions/series';
import LayoutApp from '../../components/LayoutApp';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VistaLista from '../../components/VistaLista';


const Series = ({navigation})=>{
    const {lista=[],listaTop=[]} = useSelector(state=>state.series);
    const {refreshing=false} = useSelector(state=>state.userInterface);
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

    return(<LayoutApp>
        <TopAppBar title='Inicio' right={<TouchableOpacity style={{marginLeft:100}} onPress={()=>navigation.push('FiltroSeries')}> 
                <Icon color={"#EEE"} size={theme.SIZES.BASE} name='search' size={23} />
            </TouchableOpacity>} 
        />
        
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchData} />}>
        { refreshing ? null:<Fragment>
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
        
    </LayoutApp>);
};


export default Series;



