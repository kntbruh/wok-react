import ReactPaginate from "react-paginate";
import style from "./pagination.module.scss";

const Paginate = ({ pageValue, onChangePage }) => {
  return (
    <div className={style.root}>
      <ReactPaginate
        className={style.pagination}
        breakLabel="..."
        nextLabel=" =>"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        forcePage={pageValue - 1}
        previousLabel="<="
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Paginate;
