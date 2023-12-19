import CartItem from "./CartItem";
import style from "./cart.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearItems, selectCart } from "../../redux/cartSlice";

const Cart = () => {
  //redux logic
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const itemsCart = useSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  // -------------------------------------------
  const clearCart = () => {
    dispatch(clearItems());
  };
  return (
    <div className={style.cart_content}>
      <Link to="/">
        <button className={style.back_button}>Вернуться назад</button>
      </Link>
      <div className={style.cart_header}>
        <div className={style.cart_header_title}>
          <svg
            className={style.cart_icon}
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          <h1>Ваша корзина </h1>
        </div>
        <div className={style.cart_header_clear}>
          <svg
            onClick={clearCart}
            className={style.cart_clear}
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zm-95 89l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <span>Очистить корзину</span>
        </div>
      </div>
      {itemsCart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className={style.cart_footer}>
        <div className={style.total_count}>
          Всего блюд:
          <b>{totalCount} шт.</b>
        </div>
        <div className={style.total_price}>
          Cумма вашего заказа:
          <b> {totalPrice}₽</b>
        </div>
      </div>
      <div className={style.payment}>
        <button className={style.button_pay}>Оплатить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
