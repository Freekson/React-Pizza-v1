import React from 'react';

import NavList from '../components/NavList';
import PizzaItem from '../components/PizzaBlock/index';
import Skeleton from '../components/PizzaBlock/';

const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://62df058e976ae7460be6a145.mockapi.io/pizzas')
            .then((res) => {
                return res.json();
            })
            .then((pizzas) => {
                setPizzas(pizzas);
                setIsLoading(false);
            });
    }, []);
    return (
        <>
            <NavList />
            <h3>All pizzas</h3>
            <section className="pizza">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : pizzas.map((obj) => (
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
        </>
    );
};

export default Home;
