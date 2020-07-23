import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Modal, StyleSheet, Alert } from 'react-native';
import LinksMenu from '../components/LinksMenu';
import TopAppBar from '../components/TopAppBar';
import { Button, Input } from 'galio-framework';
import { FlatList } from 'react-native';


const Home = () =>{
    const [value,setValue] = useState('');
    const [itemList, setitemList] = useState([]);

    const onChangeText = event =>{
        setValue(event)
    }

    const setItem = () =>{
        if(value!=""){
            console.log(value);
            setitemList([...itemList,{value,id:itemList.length}]);
            setValue('');
        }else{
        
            Alert.alert(
                'Alerta',
                'Necesita colocar texto para agregar.',
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              );
        }
    }


    return(
    <>
    <TopAppBar title='HOME' />
    <View style={{
        padding:10,
        zIndex:999,
        overFlow:'auto'
    }}>
        <LinksMenu />
        <Input 
            placeholder='Nuevo item'
            color='#aba'
            style={{borderColor:'#bba'}}
            value={value}
            onChangeText={onChangeText} 
        />
        <Button color="info" size='large'  onPress={setItem}  >Click</Button>
        <FlatList
            data={itemList}
            renderItem={({item})=>{
                    return <View key={item.id+1}>
                        <Text style={{fontSize:30,display:"flex"}}> 
                            <Text style={{display:"flex",width:30}}># {item.id+1}- </Text>
                            {item.value}
                        </Text>
                    </View>
                }
            }
        />
    </View>
    </>);
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    titleText: {
        fontSize:30,
        padding:15,
        margin:1,
        textAlign:'center',
        marginBottom:40,
        position:'absolute',
        marginLeft:80,
    }
  });
  

export default Home;


