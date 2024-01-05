import React from "react";
import style from "./wokItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addItem, selectCartItemById } from "../../redux/cartSlice";

type WokItemProp = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
};

const WokItem: React.FC<WokItemProp> = ({
  id,
  title,
  imageUrl,
  price,
  sizes,
  types,
}) => {
  //redux logic
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;
  // -------------------------------------------
  const type = ["соус терияки", "спайси соус"];
  const [active, setActive] = React.useState(0);
  const [activePrice, setActivePrice] = React.useState(0);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      imageUrl,
      price,
      size: sizes[activePrice],
      type: type[active],
    };
    dispatch(addItem(item));
  };

  return (
    <div className={style.wok_item}>
      <img className={style.wok_item_image} src={imageUrl} alt="" />
      <h2 className={style.wok_item_name}>{title} </h2>
      <div className={style.wok_item_selector}>
        <ul>
          {types.map((typeId) => {
            return (
              <li
                key={typeId}
                onClick={() => setActive(typeId)}
                className={active === typeId ? style.active_selector : ""}
              >
                {type[typeId]}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((size, index) => {
            return (
              <li
                key={index}
                onClick={() => setActivePrice(index)}
                className={activePrice === index ? style.active_selector : ""}
              >
                {size} гр
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.wok_item_bottom}>
        <div className={style.wok_item_price}>{price}₽</div>
        <div className={style.add_price} onClick={onClickAdd}>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default WokItem;
