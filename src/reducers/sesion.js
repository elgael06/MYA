

export const  defaultSesion = {
    status:false,
    checking:false,
    token:'',
    usuario:{id:0,nombre:'',passw:''},
    email:'',
    sesiones:[]
} 

export default (state=defaultSesion,action)=>{

    switch(action.type){
        case 'STATUS':
            return {
                ...state,
                status:action.value
            }
        case 'ADD_ID':
            return {
                ...state,
                id:action.id,
            }
        case 'ADD_TOKEN':
            return {
                ...state,
                token:action.value
            }
        case 'USUARIO':
            return {
                ...state,
                usuario:action.value
            }
        case 'EMAIL':
            return {
                ...state,
                usuario:action.value
            }
        case 'SESIONES':
            return {
                ...state,
                sesiones:action.value
            }
        case 'CHECK_SESION':
            return {
                ...state,
                checking:action.value
            }
        default: return state;
    }

}


