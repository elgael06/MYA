
export const initialSeries = {
    lista:[],
    serie:null,
    capitulo:null
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
        case 'SELECT_CAPITULO':
            return {
                ...state,
                capitulo:action.value
            }
        default: return state;
    }
}

export default series;

