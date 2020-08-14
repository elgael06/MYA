

export const  defaultSesion = {
    status:true,
    token:'',
    id:0,
    usuario:''
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
        default: return state;
    }

}


