import { select } from "../data/database";


export const getSeries =()=>{
    return  async  dispatch =>{
        dispatch({type:'REFRESH_PAGE',value:true});
        dispatch({type:'CAPITULOS',value:[]});
        dispatch({type:'SERIES',value:[]});
        const value = await(await fetch('https://apiserieslyg.herokuapp.com/api/series')).json();
        dispatch({type:'SERIES',value});
        dispatch({type:'REFRESH_PAGE',value:false})
        const datos = select();
        datos.favoritas((tab)=>{
            dispatch(SeriesFavoritas(tab.map(e=>e.idSerie)))
        });
    }
    
}
export const getTopSeries = (top=5) => {
    return  async  dispatch =>{
        dispatch({type:'REFRESH_PAGE',value:true});
        dispatch({type:'CAPITULOS',value:[]});
        dispatch({type:'TOP_SERIES',value:[]});
        const value = await(await fetch(`https://apiserieslyg.herokuapp.com/api/series?top=${top}`)).json();
        dispatch({type:'TOP_SERIES',value});
        dispatch({type:'REFRESH_PAGE',value:false})
    }
} 
export const getBusqueda = (filtro) =>{
    return async  dispatch =>{
        dispatch({type:'REFRESH_PAGE',value:true});
        dispatch({type:'CAPITULOS',value:[]});
        dispatch({type:'SEARCH',value:[]});
        const value = await(await fetch(`https://apiserieslyg.herokuapp.com/api/series?search=${filtro}`)).json();
        dispatch({type:'SEARCH',value});
        dispatch({type:'REFRESH_PAGE',value:false})
    }
} 

export const SeriesFavoritas = value =>{
    return dispatch=>{
        dispatch({
            type:'FAVORITAS',
            value
        });
    }
}

