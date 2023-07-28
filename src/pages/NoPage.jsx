import style2 from './Welcome.module.css';
import style3 from '../components/Buttons.module.css';
import style4 from './Welcome.module.css'

export function NoPage() {
    return (
        <div className={style2.welcome}>
            <h1>404</h1>
            <p className={style4.title}>Page not found</p>
            <a className={style3.btn} href="/">go home</a>
        </div>
    )
}