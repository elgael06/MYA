import React, { useEffect, useState } from 'react';
import TopAppBar from '../components/TopAppBar';
import { FlatList, Image, View } from 'react-native';
import { Link } from 'react-router-native';
import { Text, Block, Button } from 'galio-framework';
import { useSelector } from 'react-redux';


const ListaPost = () =>{
    const {postsList} = useSelector(state=>state);
    const [totalPost,setTotalPost] = useState( 0 );

    useEffect(()=>{
        setTotalPost( postsList.length );
    },[postsList]);

    return(<>
        <TopAppBar
            back
            title={`Lista post ${totalPost}`}
            right={<Link to='/AddPost'>
                <Text > 
                    Agregar
                </Text>
            </Link>}
        />
        <FlatList
            style={{margin:20,height:'70%'}}
            data={postsList}
            renderItem={(rowData) =>{
                return <Block style={
                        { 
                            height: 230,
                            backgroundColor:'#FFF',
                            marginBottom:15,
                            paddingTop:15,
                            borderBottomColor: '#dbdbdb90',
                            borderBottomWidth: 2,
                            borderRadius:10,
                            flex:1,
                            flexDirection: 'column',
                        }} key={rowData.index}>
                    <Image 
                        source={{
                            uri:rowData.item.urlImag
                        }}
                        style={{
                            flex:1,
                            alignContent:'center',
                            height:200,
                            bottom:10,
                            borderTopLeftRadius:5,
                            borderTopRightRadius:5,
                        }}
                    />

                    <Text style={{fontSize:20,color:'#000'}}># {rowData.index+1}  {rowData.item.titulo}</Text> 
                    <Text style={{color:'#000FFF',margin:10}}>{rowData.item.descripcion}</Text>
                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                        <Button color="info" size="small" round>Ir</Button>
                    </View>
                </Block>
            }}
        />
        <Text style={{margin:20,fontSize:20}}>Total de post: {totalPost}</Text>
    </>
    );
}

export default ListaPost;