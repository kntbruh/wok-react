import Sort from "../../components/Sort/Sort";
import Skeleton from "../../components/WokItem/Skeleton";
import WokItem from "../../components/WokItem/WokItem";
import wok from "../../assets/wok.jpg";
import React from "react";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import Paginate from "../../components/Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { Link } from "react-router-dom";
import Advantage from "../../components/Advantage/Advantage";
import { useNavigate } from "react-router-dom";
import { list } from "../../components/Sort/Sort";
import {
  changeCategory,
  changePage,
  selectSort,
  setFilters,
} from "../../redux/filterSlice";
import { fetchWoks, selectWok } from "../../redux/wokSlice";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { categoryId, sort, pageValue, searchValue } = useSelector(selectSort);
  const { items, status } = useSelector(selectWok);

  const getWok = async () => {
    const order = sort.sortProp.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProp.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      //@ts-ignore
      fetchWoks({
        order,
        sortBy,
        category,
        search,
        pageValue,
      })
    );
  };
  //если изменили параметры и был первый рендер:
  React.useEffect(() => {
    if (isMounted.current) {
      const querys = qs.stringify({
        sortProp: sort.sortProp,
        categoryId,
        pageValue,
      });
      navigate(`?${querys}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProp, pageValue]);
  //если был первый рендер,то проверяем url параметры и сохраням в редакс
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProp === params.sortProp);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);
  //если был первый рендер, то запрашиваем воки
  React.useEffect(() => {
    if (!isSearch.current) {
      getWok();
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue, pageValue]);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(changeCategory(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(changePage(page));
  };
  const woks = items.map((obj: any) => (
    <Link key={obj.id} to={`/wok/${obj.id}`}>
      <WokItem {...obj} />
    </Link>
  ));
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="big-logo">
        <img src={wok} alt="wok" />
      </div>
      <div className="content">
        <div className="content-top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content-title">Все воки:</h2>
        <Search />
        {status === "error" ? (
          <div>Воки не прогрузились</div>
        ) : (
          <div className="content-items">
            {status === "loading" ? skeleton : woks}
          </div>
        )}
      </div>
      <Paginate pageValue={pageValue} onChangePage={onChangePage} />
      <Advantage />
    </>
  );
};

export default Home;
