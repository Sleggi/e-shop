import axios from 'axios'

// функция будет передавать в редюсер тру или фолс и будет менять статус загрузки 
export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

// метод для получения и сохранения пицц
// функция в функции ассинхронный action для redux thunk 
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    // до того как выполнится axios запрос сразу ставить setLoaded false 
    dispatch(setLoaded(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
            // после того как запрос выполнился выполняется второй action setPizzas он сохраняет пиццы и ставит флаг, что все загруженно
            dispatch(setPizzas(data))
        })
}


// метод для сохранения пицц
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
    isLoaded: true,
})
