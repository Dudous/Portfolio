import style from './Home.module.css'
import principal from '../assets/robei.svg'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

export const Home = () => {

    return(
        <>
            <div className={style.page} id='Home'>
                <div className={style.principal}>
                    <h1 className={style.greetings}>
                        <span>Hi, I am Eduardo Sampaio</span>
                        <span>Systems Development</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <ul className={style.line}>
                            <li className={style.social}><img src={github} alt="GitHub"/></li>
                            <li className={style.social}><img src={instagram} alt="Instagram"/></li>
                            <li className={style.social}><img src={linkedin} alt="Linkedin"/></li>
                        </ul>
                    </div>
                    <div>
                        <button className={style.resume}>Resume</button>
                    </div>
                </div>
                <div>
                    <img src={principal} className={style.imgprincipal} alt="imgprincipal"/>
                </div>
            </div>
        </>  
    )
}