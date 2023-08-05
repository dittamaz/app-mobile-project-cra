import style from './About.module.css';
import third from '../..//assets/img/third.svg';
import { Link } from 'react-router-dom';
import style3 from '..//../components/Buttons.module.css';
import style4 from '..//Welcome.module.css';
import { ThreeDots } from '..//../components/ThreeDots';



export function About3 () {
    return (
        <div className={style.about} id='slide'>
            <h1 className={style4.title} >Find out more about the area you live in from local.</h1>
            <img className={style.third}  src={third} alt="third" />
            <div>
                <ThreeDots />
            </div>
            <Link className={style3.btn} to='/CreateAccount'>Continue</Link>    
        </div>
    );
}