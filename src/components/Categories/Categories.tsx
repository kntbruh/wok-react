import { useSelector, useDispatch } from "react-redux";
import React from "react";

type CategoriesProp = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProp> = React.memo(
  ({ value, onChangeCategory }) => {
    const categories = ["Все", "Мини", "Рис", "Морепродукты"];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => {
            return (
              <li
                key={index}
                onClick={() => onChangeCategory(index)}
                className={value === index ? "active" : ""}
              >
                {categoryName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Categories;
