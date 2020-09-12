import React, { useEffect } from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas'


function Home() {


    const categorie = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const items = [
        { name: "Популярности", type: 'popular' },
        { name: "Цене", type: 'price' },
        { name: "Алфавиту", type: 'alphabet' }
    ]


    // чтобы передавать данные в redux
    const dispatch = useDispatch();

    useEffect(() => {
        // после осуществления первого рендера [], отправь на сервак запрос по ссылке,
        // когда данные будут получены, вызвать диспатч получает setPizzas(объект) и диспатч передает это в redux
        dispatch(fetchPizzas())
    }, [])


    const onSelectCategories = index => {
        dispatch(setCategory(index))
    }

    // вытащим из redux state фильтрацию и массив с пиццами
    // из state мы вытаскиваем нужныем нам параметры, pizzas
    const store = useSelector(({ pizzas }) => {
        // возвращаем не все состояние, а только нужные нам
        return {
            items: pizzas.items,
        }
    });

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategories}
                    items={categorie}
                />


                <SortPopup
                    items={items}

                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    store.items && store.items.map((obj) => (
                        <PizzaBlock key={obj.id} {...obj} />
                    ))
                }

            </div>
        </div>

    )
}

export default Home
