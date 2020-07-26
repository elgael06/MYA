

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



