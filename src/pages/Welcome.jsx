import style2 from './Welcome.module.css';
import logo from '../img/logo.svg';
import style from './About.module.css';
import style3 from '../components/Buttons.module.css';
import style4 from './Welcome.module.css'

export function Welcome() {
    return (
        <div className={style2.welcome}>
            <img className={style.logo}  src={logo} alt="logo" />
            <p className={style4.title}>Virtual bulletin board</p>
            <a className={style3.btn} href="/">Welcome</a>
        </div>
    )
}