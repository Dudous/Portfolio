import style from './Historico.module.css'
import senai from '../assets/Senai.jpg'
import bosch from '../assets/bosch.png'
import unicuritiba from '../assets/unicuritiba.png'

export const Historico = () => {

    return(
        <>
            <div className={style.page} id='Historico'>
                <div className={style.principal}>
                    <h1>Experiência Profissional</h1>
                </div>
                <div className={style.deck}>

                    <div className={style.card}>
                        <img className={style.imagem} src={senai} alt="Imagem daora" />
                        <div className={style.cardContent}>
                            <h5 className={style.cardTittle}>Senai Celso Charuri</h5>
                            <p>Systems Analysis and Development Technician</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.imagem} src={unicuritiba} alt="Imagem daora" />
                        <div className={style.cardContent}>
                            <h5 className={style.cardTittle}>Unicuritiba</h5>
                            <p>Mechanical Engineering</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.imagem} src={bosch} alt="Imagem daora" />
                        <div className={style.cardContent}>
                            <h5 className={style.cardTittle}>Bosch</h5>
                            <p>Technical Apprentice in Digital Solutions</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </>  
    )
}