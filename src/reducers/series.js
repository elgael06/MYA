
export const initialSeries = {
    lista:[],
    serie:null,
    ListaCapitulos:[],
    capitulo:null,
    refreshing:false
};

const series = (state=initialSeries,action)=>{
    switch (action.type) {
        case 'SERIES':
            return{
                ...state,
                lista:action.value
            }
        case 'SELECT_SERIE':            
            return {
                ...state,
                serie:action.value
            };
        case 'CAPITULOS':
            return {
                ...state,
                ListaCapitulos:action.value
            };
        case 'REFRESH_PAGE':
            return{
                ...state,
                refreshing:action.value
            }
        case 'SELECT_CAPITULO':
            return {
                ...state,
                capitulo:action.value
            }
        default: return state;
    }
}

export default series;

