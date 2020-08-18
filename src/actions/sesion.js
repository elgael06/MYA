import { ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


export const changeStatus = value =>{

    return dispatch=>{
        dispatch({type:'STATUS',value})
    }
}

export const fetchInicioSesion = (email,passw)=>{
    const data = JSON.stringify({
        email,
        passw
    });

    console.log('fetch',data);
    return async dispatch=>{
        console.log('dispatch');

        dispatch({type:'CHECK_SESION',value:false});
        const sesion = await (await fetch('https://apiserieslyg.herokuapp.com/api/sesion',{            
            method:'POST',
            body:data,
            headers:{'Content-Type': 'application/json'}
        })).json();
        console.log(sesion);
        /**checa la sesion de usuario */
        if(sesion && !sesion.mensaje){
            /**cambia los estados del store */
            dispatch({type:'ADD_ID',value:sesion.id});
            dispatch({type:'EMAIL',value:sesion.email});
            dispatch({type:'USUARIO',value:sesion.sesiones[0]});
            dispatch({type:'STATUS',value:true});
            dispatch({type:'SESIONES',value:sesion.sesiones});

            /**guardado de sesion a localStorange */
            await AsyncStorage.setItem('sesion',JSON.stringify(sesion));

            /**Alerta el inicio de sesion */
            ToastAndroid.show(`Bienvenido ${sesion.sesiones[0].nombre}`,ToastAndroid.SHORT,ToastAndroid.CENTER);
        }else{
            /** si no retorna una sesion alerta que a fallado  */
            ToastAndroid.show('error al iniciar sesion.',ToastAndroid.SHORT,ToastAndroid.CENTER);
        }
        dispatch({type:'CHECK_SESION',value:true})
    }
}

export const removerSesion = () =>{

    return async dispatch =>{
        await AsyncStorage.clear();
        dispatch({type:'ADD_ID',value:0});
        dispatch({type:'EMAIL',value:''});
        dispatch({type:'USUARIO',value:{id:0,nombre:'',passw:''}});
        dispatch({type:'STATUS',value:false});
        dispatch({type:'SESIONES',value:[]});    
    }
}

export const getSesionFromStorange = () =>{

    console.log('get data');
    return async dispatch => {
        dispatch({type:'CHECK_SESION',value:false})
        const data = await AsyncStorage.getItem('sesion');
        const sesion = data ? JSON.parse(data) : null;

        console.log(sesion);
    
        if(sesion!=null){
            dispatch({type:'ADD_ID',value:sesion.id});
            dispatch({type:'EMAIL',value:sesion.email});
            dispatch({type:'USUARIO',value:sesion.sesiones[0]});
            dispatch({type:'STATUS',value:true});
            dispatch({type:'SESIONES',value:sesion.sesiones});          
        }

        dispatch({type:'CHECK_SESION',value:true})
    }
}

export const fetchAddSesion = (email,passw,usuario,callBack=e=>e) =>{

    return async dispatch =>{

        dispatch({type:'REFRESH_PAGE',value:true});
        const newSesion = await (await fetch('https://apiserieslyg.herokuapp.com/api/sesion',{            
            method:'POST',
            body:JSON.stringify({
                email,
                passw,
                usuario
            }),
        })).json();
        if(newSesion){
            ToastAndroid.show('se creo la sesion con exito.',ToastAndroid.SHORT,ToastAndroid.CENTER);
            dispatch({type:'REFRESH_PAGE',value:false});
            callBack()
        }else{
            ToastAndroid.show('error al crear sesion.',ToastAndroid.SHORT,ToastAndroid.CENTER);
        }
        dispatch({type:'REFRESH_PAGE',value:false});
    }
}





