import cart from '../assets/img/cart.svg';
import logo from '../assets/img/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo-section logo-section">
                    <img src={logo} alt="not found :(" className="logo-section__img" />
                    <div className="logo-section__text">
                        <b>REACT PIZZA</b>
                        <p>the most delicious pizza in the universe</p>
                    </div>
                </div>
                <div className="header__cart-section cart-section">
                    <span>52 $</span>
                    <div className="cart-section__vl" />
                    <span>
                        <img src={cart} alt="cart" />
                        <p>3</p>
                    </span>
                </div>
            </div>
            <div className="header__vl" />
        </header>
    );
}

export default Header;
