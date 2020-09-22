const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

// взял каждый объект, из него прайс и с помощь редьюс прибавил прайс к 0, за первый проход 803.
// на второй проход к 803 прибавляем второй прайс и т.д
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)


//на момент первого вызова cart state = initialState
const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];


            const newItems = {
                ...state.items,
                // при передачи динамического свойства (которое меняется типа id:1, id:2) в объект,то делаем это в 
                //квадртаных скобках
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            // соединяем все массивы в один. метод apply принимает контекст [] и помещает в него все значения объекта newItems
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas)





            return {
                ...state, // возьми старое состояние
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }



        case 'REMOVE_CART_ITEM': {
            //Клонируем айтемс в newItems 
            const newItems = {
                ...state.items
            }
            // вытаскиваем totalPrice по id 
            const currentTotalPrice = newItems[action.payload].totalPrice
            // из объекта вытаскиваем массив items и из него получаем длину
            const currentTotalCount = newItems[action.payload].items.length
            // из action.payload вытаскиваем id 
            // id удаляется только из клонируемого объекта newItems. в старом items он остается, не мутируется 
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                // вычитаем из общего state.totalPrice цену текущего по id
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }


        case 'CLEAR_CART': {
            return {
                ...state,
                totalPrice: 0,
                totalCount: 0,
                items: {},
            }
        }




        default:
            return state;
    }
}


export default cart