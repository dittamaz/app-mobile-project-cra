import style from './ThreeDots.module.css';


export function ThreeDots () {
    return (
        <div>
             <span className={style.dot}></span> 
             <span className={style.dot}></span> 
             <span className={style.dot}></span> 
        </div>
    )
}
