const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

//на момент первого вызова cart state = initialState
const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newItems = {
                ...state.items,
                // при передачи динамического свойства (которое меняется типа id:1, id:2) в объект,то делаем это в 
                //квадртаных скобках
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            // соединяем все массивы в один. метод apply принимает контекст [] и помещает в него все значения объекта newItems
            const allPizzas = [].concat.apply([], Object.values(newItems))


            // взял каждый объект, из него прайс и с помощь редьюс прибавил прайс к 0, за первый проход 803.
            // на второй проход к 803 прибавляем второй прайс и т.д
            const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state, // возьми старое состояние
                items: newItems,
                totalCount: allPizzas.length,

                totalPrice
            }
        }
        default:
            return state;
    }
}


export default cart