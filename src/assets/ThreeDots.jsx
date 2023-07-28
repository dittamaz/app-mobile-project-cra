import style from './ThreeDots.module.css';


export function ThreeDots () {
    return (
        <div>
             <span className={style.dot} onclick="currentSlide(1)"></span> 
             <span className={style.dot} onclick="currentSlide(1)"></span> 
             <span className={style.dot} onclick="currentSlide(1)"></span> 
        </div>
    )
}