
export const initialPost = [];

const postsList = (state=initialPost,action) => {
    switch(action.type){
        case 'ADD_LIST':
            return [...state,action.value];
        case 'REMOVE_LIST':
            state.splice(action.index, 1);
            return state;
        default: return state;
    }
}

export default postsList;