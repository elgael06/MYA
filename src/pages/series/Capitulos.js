import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { Image, FlatList, Text, View } from 'react-native';
import { Block, Button } from 'galio-framework';
import { useHistory } from 'react-router-native';


const Capitulos = () =>{
    const history = useHistory();
    const {serie:{
        name,
        portada,
        capitulos
    }} = useSelector(state=>state.series);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(name);
    },[]);

    const payVideo = (index,uri) => {
        console.log( index,'uri=>',uri);
        const value = {
            title:`${name} : Capitulo ${index}`,
            uri
        }
        dispatch({
            type:'SELECT_CAPITULO',
            value
        });
        console.log('ir a video'); 
        history.push('/VideoPaly');
    }

    return(
        <>
            <TopAppBar 
                title={name} 
                back
            />
            <Image source={{uri:portada}} style={{position:'absolute',top:62,bottom:0,left:1,right:0}} />            
            {capitulos.length ? <FlatList 
                style={{padding:10,backgroundColor:'#dbdbdb80',margin:10,borderRadius:5}}
                data={capitulos}
                renderItem={({item,index})=>{
                    return (<Block 
                        style={
                            {height:50,marginBottom:20,borderWidth:1,padding:10,backgroundColor:'#00000050',borderRadius:5}
                        }>
                        <Text style={{fontSize:18,color:'#fff'}}>Capitulo {index+1}</Text>
                        <View style={{flex:1,marginTop:-39,flexDirection:'row-reverse'}}>
                            <Button onPress={()=>payVideo(index+1,item)} style={{backgroundColor:'#ffffff30',width:55}} size="small" round> ver</Button>
                        </View>
                    </Block>)
                }}
            /> : <View style={{padding:40,backgroundColor:'#dbdbdb80',textAlign:'center'}}>
                <Text style={{fontSize:20}}>Sin capitulos por el momento!!!</Text>
            </View>}
        </>
    );
}



export default Capitulos;

