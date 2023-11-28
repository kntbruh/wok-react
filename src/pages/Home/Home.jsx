import Sort from '../../components/Sort/Sort'
import Skeleton from '../../components/WokItem/Skeleton'
import WokItem from '../../components/WokItem/WokItem'
import wok from '../../assets/wok.jpg'
import React from 'react'
import Categories from '../../components/Categories/Categories'
import Paginate from '../../components/Pagination/Pagination'
import { SearchContext } from '../../App'
import { useSelector } from 'react-redux'

const Home = () => {
    const categoryId = useSelector((state) => state.filter.categoryValueId)


    const { searchValue } = React.useContext(SearchContext)
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    // const [categoryId, setCategoryId] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [sort, setSort] = React.useState(
        { name: 'популярности', sortProp: 'rating' }
    )

    React.useEffect(() => {
        setIsLoading(true)

        const order = sort.sortProp.includes('-') ? 'asc' : 'desc'
        const sortBy = sort.sortProp.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://655251e85c69a7790329e2f4.mockapi.io/wok-data?page=${currentPage}&limit=3&${category}&sortby=${sortBy}&order=${order}${search}`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
    }, [categoryId, sort, searchValue, currentPage])

    const woks = items.map((obj) => <WokItem key={obj.id}{...obj} />)
    const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

    return (
        <>
            <div className='big-logo'>
                <img src={wok} alt='wok' />
            </div>
            <div className='content'>
                <div className='content-top'>
                    <Categories />
                    <Sort
                        sortValue={sort}
                        onSortChange={(id) => setSort(id)}
                    />
                </div>
                <h2 className='content-title'>Все воки:
                </h2>
                <div className='content-items'>
                    {isLoading
                        ? skeleton
                        : woks
                    }
                </div>
            </div>
            <Paginate onChangePage={(num) => setCurrentPage(num)} />
        </>
    )
}

export default Home