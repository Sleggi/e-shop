import React, { useState } from 'react'



function Categories({ items, onClickItem }) {

    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => setActiveItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
                {
                    items && items.map((item, index) => (
                        <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${item}_${index}`}>{item}</li>
                    ))
                }


            </ul>
        </div>
    )
}
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