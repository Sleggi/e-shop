const initialState = {
    items: [],
    isLoaded: false
}

//на момент первого вызова pizzas state = initialState
const pizzas = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state
}

export default pizzas;