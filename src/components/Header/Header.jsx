import { useSelector } from 'react-redux'
import style from './header.module.scss'
import { Link } from 'react-router-dom'
import React from 'react'
const Header = () => {

    const { totalPrice, items } = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    return (
        <div className={style.header}>
            <Link to='/'>
                <div className={style.header_logo}>
                    <h2>WokReact</h2>
                </div>
            </Link>
            <div className={style.header_desc}>
                <p>Лучший wok только у нас, заказывай</p>
            </div>
            <div className={style.headerGeo}>
                <p>Реактивно доставим на адрес:</p>
            </div>
            <div className={style.header_cart}>
                <Link to='/cart'>
                    <div className={style.cart_button}>
                        <span>{totalPrice}₽</span>
                        <span>{totalCount}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header