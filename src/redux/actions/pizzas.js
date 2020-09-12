import axios from 'axios'


// метод для получения и сохранения пицц
// функция в функции ассинхронный action для redux thunk 
export const fetchPizzas = () => (dispatch) => {
    axios.get("http://localhost:3004/pizzas").then(({ data }) => {
        dispatch(setPizzas(data))
    })
}


// метод для сохранения пицц
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
    isLoaded: true,
})
