import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardSerie from './CardSerie';
import { Text } from 'galio-framework';


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
        renderItem={({item})=>(<CardSerie item={item} selectSeries={selectSeries} />)}
/>
</View>;

export default VistaLista;