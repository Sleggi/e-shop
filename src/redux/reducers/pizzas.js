const initialState = {
    items: [],
    isLoaded: false
}

//на момент первого вызова pizzas state = initialState
const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        // если пришел action set_loaded то поменять isLoaded на то что стоит в action.payload в setLoaded action
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }

        default:
            return state;
    }
}


export default pizzas