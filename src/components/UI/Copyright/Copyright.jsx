import cl from './Copyright.module.css'

function Copyright(props) {
    return (
        <div className={cl.container + ' ' + props.className}>
            <span className={cl.head}>©WELBEX 2022. Все права защищены.</span>
            <a href='/' className={cl.policy}>Политика конфиденциальности</a>

        </div>
    );
}

export default Copyright;