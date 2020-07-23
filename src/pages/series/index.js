import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { FlatList, Image, View } from 'react-native';

import videos from '../../data/videos.json';
import { Block, Text, Button } from 'galio-framework';



const Series = ()=>{

    useEffect(()=>{
        console.log(videos);
    },[]);

    return(<>
        <TopAppBar title='Series' back />
        <FlatList 
            style={{padding:5,height:'90%'}}
            data={videos}
            renderItem={({item})=>{

                console.log(item.name)
                return(<Block style={{flex:1,flexDirection:'row',backgroundColor:'#FFF',marginTop:10,padding:15}}>

                    <Image style={{flex:1}} source={{uri:item.portada}} style={{height:65,width:70}} />
                    <View style={{flex:1,paddingLeft:20}}>
                        <Text style={{fontSize:20}}>{item.name}</Text>
                        <Text style={{padding:15}}>Capitulos : {item.capitulos.length}</Text>
                    </View>
                    <View  style={{flex:1,flexDirection:'row-reverse',alignItems:'flex-end',width:70}} >
                        <Button style={{width:60}} size="small" round>ir</Button>
                    </View>
                </Block>)
            }}
        />
    </>);
}

export default Series;



