

export const getSeries =()=>{

    console.log('fetch')
    return  async  dispatch =>{
        dispatch({type:'REFRESH_PAGE',value:true});
        dispatch({type:'CAPITULOS',value:[]});
        dispatch({type:'SERIES',value:[]});
        const value = await(await fetch('https://apiserieslyg.herokuapp.com/api/series')).json();
        dispatch({type:'SERIES',value});
        dispatch({type:'REFRESH_PAGE',value:false})
    }
    
}
export const getTopSeries = (top=5) => {
    console.log('fetch')
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

