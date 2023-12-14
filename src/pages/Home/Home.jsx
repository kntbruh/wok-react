import Sort from "../../components/Sort/Sort";
import Skeleton from "../../components/WokItem/Skeleton";
import WokItem from "../../components/WokItem/WokItem";
import wok from "../../assets/wok.jpg";
import React from "react";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";
import Paginate from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";
import { useSelector } from "react-redux";
import axios from "axios";
import QueryString from "qs";
import Advantage from "../../components/Advantage/Advantage";

const Home = () => {
  const { categoryId, sort, pageValue } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProp.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProp.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://655251e85c69a7790329e2f4.mockapi.io/wok-data?page=${pageValue}&limit=3&${category}&sortby=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  }, [categoryId, sort, searchValue, pageValue]);

  const woks = items.map((obj) => <WokItem key={obj.id} {...obj} />);
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
          <Categories />
          <Sort />
        </div>
        <h2 className="content-title">Все воки:</h2>
        <Search />
        <div className="content-items">{isLoading ? skeleton : woks}</div>
      </div>
      <Paginate />
      <Advantage />
    </>
  );
};

export default Home;
