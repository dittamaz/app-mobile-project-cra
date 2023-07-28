import style from './About.module.css';
import first from '../img/first.svg';
import { Link } from 'react-router-dom';
import { ThreeDots } from '../components/ThreeDots';


export function About () {
    return (
        <div className={style.about} >
            <h1>Exchange goods and services with your neighbors.</h1>
            <img className={style.imgAbout}  src={first} alt="first" />
            
            <div>
            <Link to='/'>Login</Link>
            </div>
        </div>

    );
}
