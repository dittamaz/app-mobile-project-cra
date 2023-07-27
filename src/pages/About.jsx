import style from './About.module.css';
import first from '../img/first.svg';

export function About () {
    return (
        <div className={style.about} >
            <h1>Exchange goods and services with your neighbors.</h1>
            <img src={first} alt="first" />
            <a href="/">cont</a>
    </div>
    );
}
