

export const changeStatus = value =>{

    return dispatch=>{
        dispatch({type:'STATUS',value})
    }
}

