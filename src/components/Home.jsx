import style from './Home.module.css'

export const Home = () => {

    return(
        <>
            <div className={style.page}>
                <div className={style.principal}>
                    <h1 className={style.greetings}>
                        <span>Hi, I am Eduardo Sampaio</span>
                        <span>Systems Development</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <ul className={style.line}>
                            <li className={style.social}><img src="./img/github.png" alt="GitHub"/></li>
                            <li className={style.social}><img src="./img/instagram.png" alt="Instagram"/></li>
                            <li className={style.social}><img src="./img/linkedin.png" alt="Linkedin"/></li>
                        </ul>
                    </div>
                    <div>
                        <button className={style.resume}>Resume</button>
                    </div>
                </div>
                <div className={style.imgprincipal}>
                    <img src="./img/imgprincipal.png" alt="imgprincipal"/>
                </div>
            </div>
        </>  
    )
}