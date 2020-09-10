import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas'
import { connect } from 'react-redux'





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

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => { this.props.sohranPizzas(data.pizzas) })
  }

  render() {
    return (

      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route path='/' render={() => <Home items={this.props.items} />} exact />
            <Route path='/cart' component={Cart} exact />
          </div>
        </div>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sohranPizzas: (items) => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
