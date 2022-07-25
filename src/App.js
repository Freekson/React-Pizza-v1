import React from 'react';

import Header from './components/Header';
import NavList from './components/NavList';
import PizzaItem from './components/PizzaItem';

import './scss/main.scss';

function App() {
    let [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        fetch('https://62df058e976ae7460be6a145.mockapi.io/pizzas')
            .then((res) => {
                return res.json();
            })
            .then((pizzas) => {
                setPizzas(pizzas);
            });
    }, []);
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
