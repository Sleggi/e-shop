import React from 'react'
import PropTypes from 'prop-types'



const Categories = React.memo(function ({ activeCategory, items, onClickItem }) {

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onClickItem(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {
                    items && items.map((item, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickItem(index)} key={`${item}_${index}`}>{item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
})


Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired, // является массивом объектов
    onClickItem: PropTypes.func
}

Categories.defaultProps = {
    activeCategory: null, items: []
};

export default Categories


// class Categories extends React.Component {
//     // Создаем стейт для контроля активных элементов
//     state = {
//         activeItem: 3,
//     }
//     // Метод принимающий индекс и устанавливающий стейт активных элементов равный индексу на который мы кникнули
//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })
//     }

//     render() {
//         const { items, onClickItem } = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li >Все</li>
//                     {
//                         items.map((item, index) => (
//                             <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}>{item}</li>))
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Categories