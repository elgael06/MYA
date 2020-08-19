import React  from 'react';
import { Image, View } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import Icon  from 'react-native-vector-icons/FontAwesome';
import BotonAgregarQuitar from './BotonAgregarQuitar';

const CardSerie = ({item,selectSeries=e=>e})=>{
    
    return(<View style={{
        flex:1,
        backgroundColor:'#00000015',
        margin:10,
        width:'100%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#bdbdbd95',
        position:'relative'
    }} >

        <Image style={{flex:1,borderRadius:5,position:'absolute',height:'100%',width:'100%'}} source={{uri:item.portada}} />
        <Block style={{position:'absolute',width:'90%',borderRadius:5,marginLeft:5,top:20,backgroundColor:'#00000070'}}>
            <Text style={{fontSize:15,color:'#FFF',padding:5}}>{item.nombre}</Text>
            <Text style={{padding:5,marginTop:20,fontSize:12,color:'#FFF'}}>Cap. : {item.capitulos}</Text>
        </Block>
        
        <View  style={{flex:1,flexDirection:'row-reverse',alignItems:'flex-end'}} >
           <BotonAgregarQuitar id={item.id} nombre={item.nombre} />
            
            <Button style={{width:45,fex:1}} round onPress={()=>selectSeries(item)} size="small" color='#EEEEEE90'  >
                <Icon name='play-circle' color='#eb811e' size={45} />
            </Button>
        </View>

    </View>);
}

export default CardSerie;