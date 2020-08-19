import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import TopAppBar from '../components/TopAppBar';
import { Button, Input } from 'galio-framework';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';

const AddPost = () =>{
    const history = useHistory();
    const dispatch = useDispatch();

    const [values,setValues] = useState({
        titulo:'',
        descripcion:'',
        body:'',
        urlImag:''
    })

    const agegarPost = () =>{
        let contador = 0;
        console.log('agregar...',values);
        for (let dato in values){
            console.log(dato);
            if(values[dato]){
                contador++;
            }
            console.log(contador);
        }
        if(contador==4){
            dispatch({type:'ADD_LIST',value:{...values}});
            history.goBack();
        }
    }
    const changed = title => value =>{
            const res = {...values};
            res[title] =  value;
            setValues(res);
    }

    return(<>
        <TopAppBar 
            back
            title={<Text style={titleText}>Nuevo Post</Text>}
        />
            <ScrollView style={{height:'88%',padding:10}}>
                <Input 
                    label='Titulo'       
                    onChangeText={changed('titulo')} 
                    value={values.titulo}
                />
                <Input 
                    label='Descripcion'  
                    onChangeText={changed('descripcion')} 
                    value={values.descripcion}
                />
                <Input 
                    label='Cuerpo'       
                    onChangeText={changed('body')}
                    value={values.body}
                />
                <Input 
                    label='Url imagen'   
                    onChangeText={changed('urlImag')}
                    value={values.urlImag}
                />
                
                <Button 
                    onPress={agegarPost} 
                    capitalize 
                    shadowless
                    size='large'>Guardar</Button>
            </ScrollView>
    </>);
}

const titleText ={
    fontSize:20,
    padding:15,
    margin:1,
    textAlign:'center',
    marginBottom:40,
    position:'absolute',
    marginLeft:80,
}


export default AddPost;