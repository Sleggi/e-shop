export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})
export const clearCart = (pizzaObj) => ({
    type: 'CLEAR_CART',
})