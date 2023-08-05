import style from './About.module.css';
import style3 from '..//../components/Buttons.module.css';
import style4 from '..//Welcome.module.css';
import { ThreeDots } from '../../components/ThreeDots';
import first from '..//../assets/img/first.svg';
import { Link } from 'react-router-dom';



export function About () {
    return (
        <div className={style.about} id='slide' >
            <h1 className={style4.title} >Exchange goods and services with your neighbors.</h1>
            <img className={style.first}  src={first} alt="first" />
            <div>
                <ThreeDots />
            </div>
            <Link className={style3.btn} to='/about/2'>Continue</Link>    
        </div>
    );
}
