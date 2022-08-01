import React from 'react';

import emptyCart from '../assets/img/cart-empty.png';

const EmptyCart = () => {
    return (
        <section className="cart">
            <h3 className="cart-status">Cart is empty 😕</h3>
            <p>
                You probably haven't ordered pizza yet. <br />
                To order pizza, go to the main page.
            </p>
            <img src={emptyCart} alt="cart is empty" />
            <a className="btn" href="/home">
                Come back
            </a>
        </section>
    );
};

export default EmptyCart;
