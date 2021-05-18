import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.result, id: new Date()}) //don't use push as it might mutate the result array
            };
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]; //Way 1
            // newArray.splice(action.id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElId ); // Way 2
            return {
                ...state,
                results: updatedArray
            };
        default: return state;
    }
}

export default reducer;