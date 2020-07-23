import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { FlatList, Image, View } from 'react-native';

import videos from '../../data/videos.json';
import { Block, Text, Button } from 'galio-framework';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';



const Series = ()=>{
    const history = useHistory();
    const {series} = useSelector(state=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type:'SERIES',
            value:[...videos]
        })
    },[]);

    const selectSeries = value => {
        console.log(value.name);
        dispatch({
            type:'SELECT_SERIE',
            value:{...value}
        });
        history.push('/Capitulos');
    }

    return(<>
        <TopAppBar title='Series' />
        <FlatList 
            style={{padding:5,height:'90%'}}
            data={series.lista}
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
                }>

                    <Image style={{flex:1,borderRadius:15}} source={{uri:item.portada}} style={{height:65,width:70}} />
                    <View style={{flex:1,paddingLeft:20}}>
                        <Text style={{fontSize:20}}>{item.name}</Text>
                        <Text style={{padding:15}}>Capitulos : {item.capitulos.length}</Text>
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



