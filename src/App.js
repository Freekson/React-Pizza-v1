import React from 'react';

import Header from './components/Header';
import NavList from './components/NavList';
import PizzaItem from './components/PizzaItem';

import './scss/main.scss';

import pizzas from './assets/json/pizzas.json';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <NavList />
            <h3>All pizzas</h3>
            <section className="pizza">
                {pizzas.map((obj) => (
                    <PizzaItem
                        key={obj.id}
                        title={obj.title}
                        price={obj.price}
                        img={obj.imageUrl}
                        sizes={obj.sizes}
                        types={obj.types}
                    />
                ))}
            </section>
        </div>
    );
}

export default App;
