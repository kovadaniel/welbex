import cl from './Logo.module.css'
import logo from '../../../img/welbex-logo.svg'
import welbex from '../../../img/welbex.svg'


function Logo(props) {
    return (
        <div className='logo-container'>
            <div className={cl.head}>
                <img src={logo} alt='wx' className={cl.logo} />
                <img src={welbex} alt='welbex' className={cl.title}/>
            </div>
            <div className={cl.body}>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
        </div>
        
    );
}

export default Logo;