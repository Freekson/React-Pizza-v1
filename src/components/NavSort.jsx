import arrow from '../assets/img/arrow.svg';
function NavSort() {
    return (
        <div className="nav__sort">
            <img src={arrow} alt="^-^" />
            <p>
                Sort by <span>popularity</span>
            </p>
            <ul className="nav__menu">
                <li className="menu__item menu__item_active">popularity</li>
                <li className="menu__item">price</li>
                <li className="menu__item">alphabet</li>
            </ul>
        </div>
    );
}
export default NavSort;
