
export const InitialStateInterface = {
    modal:false,
    refreshing:true
}

const userInterface = (state = InitialStateInterface,action) =>{

    switch (action.type) {
        case 'MODAL':
            return {
                ...state,
                modal:action.value
            }
        case 'REFRESH_PAGE':
            return {
                ...state,
                refreshing:action.value
            }
        default:
            return state;
    }

}

export default userInterface;


