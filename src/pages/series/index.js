import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { FlatList } from 'react-native';

import videos from '../../data/videos.json';
import { Block, Text } from 'galio-framework';



const Series = ()=>{

    useEffect(()=>{
        console.log(videos);
    },[]);

    return(<>
        <TopAppBar title='Series' back />
        <FlatList 
            data={videos}
            renderItem={({item})=>{

                console.log(item.name)
                return(<Block style={{heigth:200,backgroundColor:'#FFF',marginTop:10}}>
                    <Text style={{fontSize:20,padding:15}}>Serie: {item.name}</Text>
                </Block>)
            }}
        />
    </>);
}

export default Series;



