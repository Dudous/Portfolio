import style from './Header.module.css'

export const Header = () => {

    return(
        <>
            <nav>
                <div className={style.navbar}>
                    <div className={style.name}>
                        <a className={style.text} href="">Eduardo Sampaio</a>
                    </div>
                    <div className={style.sessenta}>
                        <ul className={style.pageList}>
                            <li className={style.page}><a className={style.text} href="#Home">Home</a></li>
                            <li className={style.page}><a className={style.text} href="#Historico">Histórico</a></li>
                            <li className={style.page}><a className={style.text} href="#Projects">Projects</a></li>
                            <li className={style.page}><a className={style.text} href="">About</a></li>
                            <li className={style.page}><a className={style.text} href="">Soft skills</a></li>
                            <li className={style.page}><a className={style.text} href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>  
    )
}