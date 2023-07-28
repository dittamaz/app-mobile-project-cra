import style from './About.module.css';
import first from '../..//img/first.svg';
import { Link } from 'react-router-dom';
import style3 from '..//../components/Buttons.module.css';
import style4 from '..//Welcome.module.css';
import { ThreeDots } from '../../assets/ThreeDots';



export function About () {
    return (
        <div className={style.about} >
            <h1 className={style4.title} >Exchange goods and services with your neighbors.</h1>
            <img className={style.first}  src={first} alt="first" />
            <div>
                <ThreeDots />
            </div>
            <Link className={style3.btn} to='/'>Continue</Link>    
        </div>

    );
}
