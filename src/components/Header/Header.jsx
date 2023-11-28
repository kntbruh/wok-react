import Search from '../Search/Search'
import style from './header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
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
            <Search />
            <div className={style.headerGeo}>
                <p>Реактивно доставим на адрес:</p>
            </div>
            <div className={style.header_cart}>
                <div className={style.cart_button}>
                    <span>385₽</span>
                    <i>1</i>
                </div>
            </div>
        </div>
    )
}

export default Header