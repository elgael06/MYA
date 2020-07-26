import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { FlatList, Image, View } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
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
        <TopAppBar title='Series' />
        <FlatList 
            refreshing={refreshing}
            onRefresh={()=> dispatch(getSeries())}
            style={{padding:5,height:'90%'}}
            data={lista}
            renderItem={({item})=>{
                return(<Block style={
                    {
                        flex:1,
                        flexDirection:'row',
                        backgroundColor:'#FFF',
                        marginTop:10,padding:15,
                        borderRadius:5,
                        borderWidth:1,
                        borderColor:'#bdbdbd95'
                    }
                } key={item.id}>

                    <Image style={{flex:1,borderRadius:15}} source={{uri:item.portada}} style={{height:65,width:70}} />
                    <View style={{flex:1,paddingLeft:20}}>
                        <Text style={{fontSize:20}}>{item.nombre}</Text>
                        <Text style={{padding:15}}>Capitulos : {item.capitulos}</Text>
                    </View>
                    <View  style={{flex:1,flexDirection:'row-reverse',alignItems:'flex-end',width:70}} >
                        <Button style={{width:60}} onPress={()=>selectSeries(item)} size="small" round>ir</Button>
                    </View>
                </Block>)
            }}
        />
    </>);
}

export default Series;



