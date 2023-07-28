import style from './NoPage.module.css';

export function NoPage () {
    return (
        <div className={style.nopage} >
            <h1>404</h1>
            <p>Page not found</p>
            <a className={style.link} href="/">Go home</a>
        </div>
    );
}