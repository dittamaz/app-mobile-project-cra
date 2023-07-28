import style from './About.module.css';
import second from '../..//img/second.svg';
import { Link } from 'react-router-dom';
import style3 from '..//../components/Buttons.module.css';
import style4 from '..//Welcome.module.css';
import { ThreeDots } from '../../assets/ThreeDots';



export function About2 () {
    return (
        <div className={style.about} >
            <h1 className={style4.title} >Exchange goods and services with your neighbors.</h1>
            <img className={style.second}  src={second} alt="second" />
            <div>
                <ThreeDots />
            </div>
            <Link className={style3.btn} to='/about/3'>Continue</Link>    
        </div>
    );
}
