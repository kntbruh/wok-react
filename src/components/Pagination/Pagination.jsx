import ReactPaginate from 'react-paginate'
import style from './pagination.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../redux/filterSlice'

const Paginate = () => {

    const { pageValue } = useSelector((state) => state.filter)
    const dispatch = useDispatch();

    const onChangePage = (number) => {
        dispatch(changePage(number))
    }
    return (
        <div className={style.root}>
            <ReactPaginate
                className={style.pagination}
                breakLabel="..."
                nextLabel=" =>"
                onPageChange={e => onChangePage(e.selected + 1)}
                pageRangeDisplayed={5}
                pageCount={3}
                forcePage={pageValue - 1}
                previousLabel="<="
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Paginate