import React, { useEffect } from 'react';
import axios from 'axios'
import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas'
import { useDispatch } from 'react-redux'


// ХРАНЕНИЕ СТЕЙТА В useState

// function App() {

//   useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then((resp) => { setPizzas(resp.data.pizzas) })
//     // // Чтобы иметь доступ к файлам по ссылке, закидываем их в папку public
//     // fetch('http://localhost:3000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => { setPizzas(json.pizzas) })
//   }, [])

//   return;
// }


// ХРАНЕНИЕ СТЕЙТА В REDUX ЧЕРЕЗ ХУКИ

function App() {

  // чтобы передавать данные в redux
  const dispatch = useDispatch();

  useEffect(() => {
    // после осуществления первого рендера [], отправь на сервак запрос по ссылке,
    // когда данные будут получены, вызвать диспатч получает setPizzas(объект) и диспатч передает это в redux
    axios.get("http://localhost:3004/pizzas").then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [])

  return (

    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' component={Home} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    </div>

  )
}

export default App


// ХРАНЕНИЕ СТЕЙТА В КЛАССОВОМ КОМПОНЕНТЕ REDUX

// class App extends React.Component {

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => { this.props.sohranPizzas(data.pizzas) })
//   }

//   render() {
//     return (

//       <div className="App">
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Route path='/' render={() => <Home items={this.props.items} />} exact />
//             <Route path='/cart' component={Cart} exact />
//           </div>
//         </div>
//       </div>

//     )
//   }

// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     sohranPizzas: (items) => dispatch(setPizzas(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
