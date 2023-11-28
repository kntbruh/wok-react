import React from 'react'
import style from './wokItem.module.scss'
// import wokItemPic from '../../assets/wok-item.jpg'

const WokItem = ({ title, imageUrl, price, sizes, types }) => {

    const type = ['соус терияки', 'спайси соус']

    const [active, setActive] = React.useState(0)

    const [activePrice, setActivePrice] = React.useState(0)
    const onClickActive = (index) => {
        setActive(index)
    }
    const onClickActivePrice = (index) => {
        setActivePrice(index)
    }
    const [count, setCount] = React.useState(0)

    const onClickCount = () => {
        setCount(count + 1)
    }

    return (
        <div className={style.wok_item}>
            <img className={style.wok_item_image} src={imageUrl} alt='' />
            <h2 className={style.wok_item_name}>{title} </h2>
            <div className={style.wok_item_selector}>
                <ul>
                    {types.map((typeId) => {
                        return <li key={typeId} onClick={() => onClickActive(typeId)} className={active === typeId ? style.active_selector : ''}>{type[typeId]}</li>
                    }

                    )}

                </ul>
                <ul>
                    {sizes.map((size, index) => {
                        return <li key={index} onClick={() => onClickActivePrice(index)} className={activePrice === index ? style.active_selector : ''}>{size} гр</li>
                    })}
                </ul>
            </div>
            <div className={style.wok_item_bottom}>
                <div className={style.wok_item_price}>{price}</div>
                <div className={style.add_price} onClick={onClickCount}>
                    <span>Добавить</span>
                    <i>{count}</i>
                </div>
            </div>
        </div>
    )
}

export default WokItem