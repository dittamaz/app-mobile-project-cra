import style2 from './Welcome.module.css';
import logo from '../assets/img/logo.svg';
import style from './about/About.module.css';
import style3 from '../components/Buttons.module.css';
import style4 from './Welcome.module.css'
import { Link } from 'react-router-dom';

export function Welcome() {
    return (
        <div className={style2.welcome}>
            <img className={style.logo}  src={logo} alt="logo" />
            <p className={style4.title}>Virtual bulletin board</p>
            <Link to='/about'className={style3.btn}>Welcome</Link>
        </div>
    )
}