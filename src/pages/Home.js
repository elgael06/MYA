import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Modal, StyleSheet, Alert } from 'react-native';
import LinksMenu from '../components/LinksMenu';
import TopAppBar from '../components/TopAppBar';
import MyTextInput from '../components/MyTextInput';


const Home = () =>{
    const [value,setValue] = useState('');
    const [itemList, setitemList] = useState([]);
    const [modalState, setmodalState] = useState(false)

    const onChangeText = event =>{
        setValue(event)
    }

    const setItem = () =>{
        if(value!=""){
            setitemList([...itemList,value]);
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
    <TopAppBar >
        <Text style={styles.titleText}>Home</Text>
    </TopAppBar>
    <View style={{
        padding:10,
        zIndex:999
    }}>
        <LinksMenu />
        <MyTextInput 
            titulo='Agregar a lista' 
            value={value}
            onChangeText={onChangeText} 
        />
        <TouchableHighlight onPress={setItem}>
            <Text  style={
                {
                    margin:5,
                    borderRadius:12,
                    textAlign:'center',
                    height:42,
                    padding:12,
                    backgroundColor:'#bdbdbd',
                    fontSize:16,
                    color:'#fffccc'
                }
            }>Click</Text>
        </TouchableHighlight>

            {
                itemList.map((e,i)=><View>
                    <Text>#{i+1}</Text>
                    <Text>{e}</Text>
                </View>)
            }
        <Modal 
            animationType='fade'
            visible={modalState}
            transparent={true}

        >
             <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>
                        Falta colocal texto en el input.
                    </Text>
                    <TouchableHighlight onPress={()=>setmodalState(false)}>
                        <Text
                            style={styles.modalText,{
                                margin:5,
                                borderRadius:12,
                                textAlign:'center',
                                minWidth:95,
                                height:42,
                                padding:12,
                                backgroundColor:'#bdbdbd',
                                fontSize:16,
                                color:'#fffccc'
                            }}
                        >
                            Ok
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
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


