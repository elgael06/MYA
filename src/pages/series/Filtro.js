import React, { useState } from 'react';
import { Input, Block } from 'galio-framework';
import LayoutApp from '../../components/LayoutApp';
import TopAppBar from '../../components/TopAppBar';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { getBusqueda } from '../../actions/series';
import CardSerie from '../../components/CardSerie';
import { View } from 'react-native';

const FiltroSeries = ({navigation}) =>{
    const {filtroSeries=[]} = useSelector(state=>state.series);
    const dispatch = useDispatch();
    const [value,setValue] = useState('');


    const handle = e =>{
        setValue(e);
    }
    const buscar = ()=>{
        console.log(`Buscar: ${value}`);
        dispatch(getBusqueda(value));
    }
    const selectSeries = value => {
        console.log(value.nombre);
        dispatch({
            type:'SELECT_SERIE',
            value:{...value}
        });
        navigation.navigate('Capitulos');
    }
    return (
        <LayoutApp>
            <TopAppBar
            back
            onBack={()=>navigation.pop()}
            title='Bucar Serie.'
            />
            <Block style={{margin:5}}>
                <Input
                    value={value}
                    placeholder='nombre...'
                    right
                    icon='laptop'
                    family="antdesign"
                    iconSize={19}
                    onChangeText={handle}
                    transparent={true}
                    onBlur={buscar}
                />
            </Block>
            <FlatList
        style={{height:210,backgroundColor:'#00000060',borderRadius:5,marginStart:10,marginEnd:10}} 
                data={filtroSeries}
                renderItem={({item})=>(<View style={{height:200}}>
                    <CardSerie item={item} selectSeries={selectSeries} />
                </View> )}
            />
        </LayoutApp>
        )
}

export default FiltroSeries;