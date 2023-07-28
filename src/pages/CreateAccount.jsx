import { Link } from 'react-router-dom';
import style2 from './Welcome.module.css';
import style3 from '../components/Buttons.module.css';
import style4 from './Welcome.module.css'

export function CreateAccount() {
    return (
        <div className={style2.welcome}>
            <h1 className={style4.title}>Welcome to local!</h1>
            <p className={style4.title}>firstly, tell us a bit about yourselfe.</p>
            <form action=""></form>
            <Link className={style3.btn} to='/'>iii</Link>
        </div>
    )
}