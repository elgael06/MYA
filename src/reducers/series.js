
export const initialSeries = {
    lista:[],
    listaTop:[],
    serie:null,
    ListaCapitulos:[],
    capitulo:null,
    filtroSeries:[]
};

const series = (state=initialSeries,action)=>{
    switch (action.type) {
        case 'SERIES':
            return{
                ...state,
                lista:action.value
            }
        case 'TOP_SERIES':
            return {
                ...state,
                listaTop:action.value
            };
        case 'SELECT_SERIE':            
            return {
                ...state,
                serie:action.value
            };
        case 'SEARCH':
            return{
                ...state,
                filtroSeries:action.value
            }
        case 'CAPITULOS':
            return {
                ...state,
                ListaCapitulos:action.value
            };
        case 'SELECT_CAPITULO':
            return {
                ...state,
                capitulo:action.value
            }
        default: return state;
    }
}

export default series;

