import { createStore } from 'redux';
const SELECTED_LIST = 'SELECTED_LIST';

export const selectList = (list) =>({
    type: SELECTED_LIST,
    selectedList: list
});

const initialState = {
    selectedList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_LIST:
            return { ...state, selectedList: action.selectList };    
        default:
            return state;
    }
}

export const store = createStore(reducer);