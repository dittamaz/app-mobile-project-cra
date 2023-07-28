import style from './About.module.css';
import first from '../img/first.svg';
import { Link } from 'react-router-dom';



export function About () {
    return (
        <div className={style.about} >
            <h1>Exchange goods and services with your neighbors.</h1>
            <img className={style.imgAbout}  src={first} alt="first" />
            <a href="/">Continue</a>
            
        </div>

    );
}
