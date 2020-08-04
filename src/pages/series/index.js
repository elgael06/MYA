import React, { useEffect, Fragment } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { FlatList, Image, View, ScrollView, RefreshControl } from 'react-native';
import { Block, Text, Button, theme,DeckSwiper } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries, getTopSeries } from '../../actions/series';
import LayoutApp from '../../components/LayoutApp';


const Series = ({navigation})=>{
    const {lista=[],listaTop=[],refreshing=false,ListaCapitulos} = useSelector(state=>state.series);
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
        <TopAppBar title='Inicio' right={<Icon color={"#EEE"} size={theme.SIZES.BASE} name='search' />} />
        
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

const VistaLista = ({title,selectSeries,lista})=><View style={{height:240,backgroundColor:'#00000090',marginTop:10,borderRadius:5,marginStart:10,marginEnd:10}}>
    
    <Text style={{marginTop:5,marginLeft:20,fontSize:25,color:'#eeeeee'}}>{ title}</Text>
    <FlatList
        horizontal
        style={{height:190,backgroundColor:'#00000060',borderRadius:5,marginStart:10,marginEnd:10}}
        data={lista}
        viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }}
        renderItem={({item})=>{
            return(<CardSerie item={item} selectSeries={selectSeries} />)
        }}
/>
</View>;

const CardSerie = ({item,selectSeries=e=>e})=>(<View style={
    {
        flex:1,
        backgroundColor:'#00000015',
        margin:10,
        width:300,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#bdbdbd95',
        position:'relative'
    }
} key={item.id}>

    <Image style={{flex:1,borderRadius:5,position:'absolute',height:'100%',width:'100%'}} source={{uri:item.portada}} />
    <Block style={{position:'absolute',width:305,borderRadius:5,marginLeft:5,top:20,backgroundColor:'#00000070'}}>
        <Text style={{fontSize:18,color:'#FFF',padding:5}}>{item.nombre}</Text>
        <Text style={{padding:5,marginTop:20,fontSize:21,color:'#FFF'}}>Capitulos : {item.capitulos}</Text>
    </Block>
    <View  style={{flex:1,flexDirection:'row-reverse',alignItems:'flex-end'}} >
        <Button style={{width:45}} round onPress={()=>selectSeries(item)} size="small" color='#EEEEEE90'  >
            <Icon name='bookmark' color='#f7aa3e' size={25} />
        </Button>
        
        <Button style={{width:45,fex:1}} round onPress={()=>selectSeries(item)} size="small" color='#393e4670'  >
            <Icon name='list' color='#EEE' size={25} />
        </Button>
    </View>
</View>);


export default Series;



