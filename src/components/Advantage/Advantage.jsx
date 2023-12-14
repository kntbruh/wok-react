import style from './advantage.module.scss'

const Advantage = () => {
    return (
        <div className={style.adv}>
            <h1>Наши преимущества</h1>
            <h4>Почему выбирают нас?</h4>
            <div className={style.adv_grid}>
                <div className={style.adv_grid_item}>
                    <h2>Широкий выбор</h2>
                    <p>У нас вы найдете лапшу вок на любой вкус и цвет.</p>
                </div>
                <div className={style.adv_grid_item}>
                    <h2>Качество</h2>
                    <p>Мы готовим лапшу только из свежих и качественных продуктов.</p>
                </div>
                <div className={style.adv_grid_item}>
                    <h2>Быстрая доставка</h2>
                    <p>Мы доставим ваш заказ быстро и надежно, чтобы вы могли насладиться вкусной лапшей вок.</p>
                </div>
                <div className={style.adv_grid_item}>
                    <h2>Удобный сервис</h2>
                    <p>Мы ценим ваше время и предлагаем удобный сервис заказа и доставки.</p>
                </div>
                <div className={style.adv_grid_item}>
                    <h2>Акции и скидки</h2>
                    <p>Подписывайтесь на наши новости и получайте эксклюзивные предложения и скидки.</p>
                </div>
                <div className={style.adv_grid_item}>
                    <h2>Клиентоориентированность</h2>
                    <p>Мы всегда готовы выслушать ваши пожелания и предложения, чтобы сделать ваше обслуживание максимально комфортным.</p>
                </div>
            </div>
        </div>
    )
}

export default Advantage