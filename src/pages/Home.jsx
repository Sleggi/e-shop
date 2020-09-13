import React, { useEffect } from 'react'
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';



function Home() {


    const categorie = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const items = [
        { name: "Популярности", type: 'popular', order: 'desc' },
        { name: "Цене", type: 'price', order: 'desc' },
        { name: "Алфавиту", type: 'name', order: 'asc' }
    ]


    // вытащим из redux state массив с пиццами
    // из state мы вытаскиваем нужныем нам параметры, pizzas
    const store = useSelector(({ pizzas, filters }) => {
        // возвращаем состояния
        return {
            items: pizzas.items,
            isLoaded: pizzas.isLoaded,
            categorie: filters.categorie,
            sortBy: filters.sortBy
        }
    });

    // чтобы передавать данные в redux
    const dispatch = useDispatch();

    useEffect(() => {
        // после осуществления первого рендера [], отправь на сервак запрос по ссылке,
        // когда данные будут получены, вызвать диспатч получает setPizzas(объект) и диспатч передает это в redux
        dispatch(fetchPizzas(store.sortBy, store.categorie))
    }, [store.sortBy, store.categorie])


    const onSelectCategories = index => {
        dispatch(setCategory(index))
    }

    const onSelectType = type => {
        dispatch(setSortBy(type))
    }






    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={store.categorie}
                    onClickItem={onSelectCategories}
                    items={categorie}
                />


                <SortPopup
                    items={items}
                    activeSortType={store.sortBy.type}
                    onClickSortType={onSelectType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    store.isLoaded ? store.items.map((obj) =>
                        <PizzaBlock key={obj.id} {...obj} />
                    ) : Array(12).fill(<LoadingBlock />) // добавляем 12 loading блоков при рендере компонента)
                }


            </div>
        </div>

    )
}

export default Home
