import style from './About.module.css';
import third from '../..//img/third.svg';
import { Link } from 'react-router-dom';
import style3 from '..//../components/Buttons.module.css';
import style4 from '..//Welcome.module.css';
import { ThreeDots } from '../../assets/ThreeDots';



export function About3 () {
    return (
        <div className={style.about} >
            <h1 className={style4.title} >Exchange goods and services with your neighbors.</h1>
            <img className={style.third}  src={third} alt="third" />
            <div>
                <ThreeDots />
            </div>
            <Link className={style3.btn} to='/CreateAccount'>Continue</Link>    
        </div>
    );
}
