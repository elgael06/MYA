

export const getCapitulos = () =>{
    return async (dispatch,getState)=>{
        const { id } = getState().series.serie;
        dispatch({type:'REFRESH_PAGE',value:true});
        dispatch({type:'CAPITULOS',value:[]});
        const value = await(await fetch(`https://apiserieslyg.herokuapp.com/api/series/capitulos?idSerie=${id}`)).json();
        dispatch({type:'CAPITULOS',value});
        dispatch({type:'REFRESH_PAGE',value:false})
    }
} 

