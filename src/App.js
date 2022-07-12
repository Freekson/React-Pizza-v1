import React from 'react';

import Header from './components/Header';
import NavList from './components/NavList';
import PizzaItem from './components/PizzaItem';

import './scss/main.scss';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <NavList />
            <h3>All pizzas</h3>
            <section className="pizza">
                <PizzaItem title="Cheeseburger pizza" price={19} img="1" />
                <PizzaItem title="Asian shrimp" price={22} img="2" />
                <PizzaItem title="Cheese chicken" price={24} img="3" />
                <PizzaItem title="Cheese" price={18} img="4" />
                <PizzaItem title="Cheeseburger pizza" price={19} />
                <PizzaItem title="Asian shrimp" price={22} />
                <PizzaItem title="Cheese chicken" price={24} />
                <PizzaItem title="Cheese" price={18} />
            </section>
        </div>
    );
}

export default App;
