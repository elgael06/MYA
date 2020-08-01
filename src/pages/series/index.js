import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { FlatList, Image, View, ScrollView } from 'react-native';
import { Block, Text, Button, theme } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';
import { getSeries } from '../../actions/series';



const Series = ()=>{
    const history = useHistory();
    const {lista=[],refreshing=false} = useSelector(state=>state.series);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSeries());
    },[]);

    const selectSeries = value => {
        console.log(value.nombre);
        dispatch({
            type:'SELECT_SERIE',
            value:{...value}
        });
        history.push('/Capitulos');
    }

    return(<>
        <TopAppBar title='Inicio' right={<Icon color={"#EEE"} size={theme.SIZES.BASE} name='search' />} />
        <ScrollView>
        <VistaLista 
            title='Nuevas series'
            lista={lista}
            selectSeries={selectSeries}
        />
        <VistaLista 
            title='Series'
            lista={lista}
            selectSeries={selectSeries}
        />
        <VistaLista 
            title='Mi lista'
            lista={lista}
            selectSeries={selectSeries}
        />
        </ScrollView>
        
    </>);
}

const VistaLista = ({title,selectSeries,lista})=><><Text style={{marginTop:5,marginLeft:20,fontSize:25,color:'#eeeeee'}}>{title}</Text>
<FlatList
     horizontal
    style={{height:190,backgroundColor:'#eeeeee60',borderRadius:5,marginStart:10,marginEnd:10}}
    data={lista}
    viewabilityConfig={{
        waitForInteraction: true,
        viewAreaCoveragePercentThreshold: 95
    }}
    renderItem={({item})=>{
        return(<View style={
            {
                flex:1,
                backgroundColor:'#FFFFFF95',
                margin:10,
                width:320,
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
                <Button style={{width:60}} onPress={()=>selectSeries(item)} size="small" color='#393e4670'  >
                    <Text style={{color:'#EEE',fontSize:20}}>lista</Text>
                </Button>
            </View>
        </View>)
    }}
/></>;


export default Series;



