import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';






function App() {

  const [pizzas, setPizzas] = useState([])

  console.log(pizzas)

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then((resp) => { setPizzas(resp.data.pizzas) })
    // // Чтобы иметь доступ к файлам по ссылке, закидываем их в папку public
    // fetch('http://localhost:3000/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => { setPizzas(json.pizzas) })
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={pizzas} />} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
