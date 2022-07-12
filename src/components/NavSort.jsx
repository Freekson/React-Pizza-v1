function NavSort() {
    return (
        <div className="nav__sort">
            <img src="./img/arrow.svg" alt="^-^" />
            <p>
                Sort by <span>popularity</span>
            </p>
            <ul class="nav__menu nav__menu_active">
                <li class="menu__item menu__item_active">popularity</li>
                <li class="menu__item">price</li>
                <li class="menu__item">alphabet</li>
            </ul>
        </div>
    );
}
export default NavSort;
