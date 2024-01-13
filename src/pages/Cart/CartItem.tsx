import style from "./cart.module.scss";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/cartSlice";
import React from "react";

type CartItemProp = {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

const CartItem: React.FC<CartItemProp> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const plusProduct = () => {
    dispatch(addItem({ id }));
  };
  const minusProduct = () => {
    dispatch(minusItem({ id }));
  };
  const removeProduct = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className={style.cart__item}>
      <div className={style.cart__item_img}>
        <img src={imageUrl} alt="Pizza" />
      </div>
      <div className={style.cart__item_info}>
        <h3>{title}</h3>
        <p>
          {type}, {size} гр.
        </p>
      </div>
      <div className={style.cart__item}>
        <button className={style.cart__button} onClick={plusProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
        <b>{count}</b>
        <button
          disabled={count === 1}
          onClick={minusProduct}
          className={style.cart__button}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
      <div className={style.cart__item_price}>
        <b>{price * count} ₽</b>
      </div>
      <div className={style.cart__item_remove}>
        <div className={style.button} onClick={removeProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
