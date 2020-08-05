import React from 'react';
import { Image, View } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';

const CardSerie = ({item,selectSeries=e=>e})=>(<View style={
    {
        flex:1,
        backgroundColor:'#00000015',
        margin:10,
        width:'100%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#bdbdbd95',
        position:'relative'
    }
} key={item.id}>

    <Image style={{flex:1,borderRadius:5,position:'absolute',height:'100%',width:'100%'}} source={{uri:item.portada}} />
    <Block style={{position:'absolute',width:'90%',borderRadius:5,marginLeft:5,top:20,backgroundColor:'#00000070'}}>
        <Text style={{fontSize:15,color:'#FFF',padding:5}}>{item.nombre}</Text>
        <Text style={{padding:5,marginTop:20,fontSize:12,color:'#FFF'}}>Cap. : {item.capitulos}</Text>
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

export default CardSerie;