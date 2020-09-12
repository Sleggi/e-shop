const initialState = {
    categorie: null,
    sortBy: 'popular'
}

//на момент первого вызова filters state = initialState
const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                categorie: action.payload,
            }
        default:
            return state
    }


}

export default filters;