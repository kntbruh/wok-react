import React from "react";
import style from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={style.nf}>
      <h1 className={style.nf_H1}>Ничего не найдено</h1>
      <span>🤔</span>
      <p>К сожалению, данной страницы нет в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFound;
