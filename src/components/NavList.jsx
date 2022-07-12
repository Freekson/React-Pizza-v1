import NavSort from './NavSort';

function NavList() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li>
                    <a href="#" className="active">
                        All
                    </a>
                </li>
                <li>
                    <a href="#">Meat</a>
                </li>
                <li>
                    <a href="#">Vegetarian</a>
                </li>
                <li>
                    <a href="#">Grill</a>
                </li>
                <li>
                    <a href="#">Spicy</a>
                </li>
                <li>
                    <a href="#">Closed</a>
                </li>
            </ul>
            <NavSort />
        </nav>
    );
}

export default NavList;
