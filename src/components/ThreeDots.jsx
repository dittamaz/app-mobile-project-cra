import style from './ThreeDots.module.css';

/*function carousel(elem, n, dotClass, cssVariable ){
    let sekcija = document.getElementById(n);
    let dotai3 = sekcija.querySelectorAll(dotClass);
    for (let i of dotai3){
      i.classList.remove("active");
    };
    elem.classList.add("active");

    let siblingsCount = sekcija.querySelectorAll(dotClass).length;
    let nextSiblingsCount = 0;
    let index = 0;
    let nextSibling = elem.nextElementSibling;
    while(nextSibling) {
      nextSiblingsCount++;
      nextSibling = nextSibling.nextElementSibling;
    }
    index = siblingsCount - nextSiblingsCount - 1;
    document.querySelector('.'+n).style.setProperty(cssVariable, index+4);
  };




function showDot(obj){
    let elem = obj.target;
    carousel(elem, 'slide', '.dot3', '--slide-number')
  };

  let obj = document.querySelectorAll('.dot3');
  for (let o of obj){
  o.addEventListener("click", showDot);
}
 */



export function ThreeDots () {
    return (
        <div>
             <span className={style.dot}></span> 
             <span className={style.dot}></span> 
             <span className={style.dot}></span> 
        </div>
    )
}
