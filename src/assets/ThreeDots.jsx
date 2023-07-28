import style from './ThreeDots.module.css';

let dotIndex = 1;
showDot(dotIndex);

function showDot(n) {
  
}


export function ThreeDots () {
    return (
        <div>
             <span className={style.dot} onclick="showDot(1)"></span> 
             <span className={style.dot} onclick="showDot(2)"></span> 
             <span className={style.dot} onclick="showDot(3)"></span> 
        </div>
    )
}