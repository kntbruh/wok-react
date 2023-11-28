
import { useSelector, useDispatch } from 'react-redux'
import { changeCategory } from '../../redux/filterSlice'

const Categories = () => {
    const value = useSelector((state) => state.filter.categoryValueId)
    const dispatch = useDispatch()

    const onChangeCategory = (id) => {
        dispatch(changeCategory(id))
    }

    const categories = ['Все', 'Мини', 'Рис', 'Морепродукты',]

    return (
        <div className='categories'>
            <ul>
                {categories.map((categoryName, index) => {
                    return <li key={index}
                        onClick={() => onChangeCategory(index)}
                        className={value === index ? 'active' : ''}>{categoryName}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories