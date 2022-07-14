import React from 'react';

import Header from './components/Header';
import NavList from './components/NavList';
import PizzaItem from './components/PizzaItem';

import './scss/main.scss';
import pizza1 from './assets/img/pizza-1.png';
import pizza2 from './assets/img/pizza-2.png';
import pizza3 from './assets/img/pizza-3.png';
import pizza4 from './assets/img/pizza-4.png';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <NavList />
            <h3>All pizzas</h3>
            <section className="pizza">
                <PizzaItem title="Cheeseburger pizza" price={19} img={pizza1} />
                <PizzaItem title="Asian shrimp" price={22} img={pizza2} />
                <PizzaItem title="Cheese chicken" price={24} img={pizza3} />
                <PizzaItem title="Cheese" price={18} img={pizza4} />
                <PizzaItem title="Cheeseburger pizza" price={19} img={pizza1} />
                <PizzaItem title="Asian shrimp" price={22} img={pizza2} />
                <PizzaItem title="Cheese chicken" price={24} img={pizza3} />
                <PizzaItem title="Cheese" price={18} img={pizza4} />
            </section>
        </div>
    );
}

export default App;
