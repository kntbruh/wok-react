import { useSelector } from "react-redux";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import { selectCart } from "../../redux/cartSlice";

const Header: React.FC = () => {
  const location = useLocation();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  return (
    <div className={style.header}>
      <Link to="/">
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
        {location.pathname !== "/cart" && (
          <Link to="/cart">
            <div className={style.cart_button}>
              <span>{totalPrice}₽</span>
              <span>{totalCount}</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
