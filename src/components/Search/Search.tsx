import style from "./search.module.scss";
import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../redux/filterSlice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(changeSearchValue(""));
    searchRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(changeSearchValue(str));
    }, 350),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <input
        value={value}
        ref={searchRef}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Найти вок"
      />
      {value ? (
        <svg
          className={style.icon}
          onClick={onClickClear}
          enableBackground="new 0 0 128 128"
          height="128px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 128 128"
          width="128px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g>
              <path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z" />
            </g>
          </g>
        </svg>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
