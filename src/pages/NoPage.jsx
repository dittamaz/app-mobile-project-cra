import { Link } from 'react-router-dom';
import style2 from './Welcome.module.css';
import style3 from '../components/Buttons.module.css';
import style4 from './Welcome.module.css'

export function NoPage() {
    return (
        <div className={style2.welcome}>
            <h1 className={style4.title}>404</h1>
            <p className={style4.title}>Page not found</p>
            <Link className={style3.btn} to='/'>Go Welcome :)</Link>
        </div>
    )
}