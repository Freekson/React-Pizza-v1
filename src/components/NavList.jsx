import React from 'react';

import NavSort from './NavSort';

function NavList() {
    const [activeCategory, setActiveCategory] = React.useState(0);
    const onClickCategory = (i) => {
        setActiveCategory(i);
    };
    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    return (
        <nav className="nav">
            <ul className="nav__list">
                {categories.map((value, index) => (
                    <li>
                        <a
                            href="#"
                            onClick={() => onClickCategory(index)}
                            className={activeCategory == index ? 'active' : ''}>
                            {value}
                        </a>
                    </li>
                ))}
            </ul>
            <NavSort />
        </nav>
    );
}

export default NavList;
