import style from './Historico.module.css'
import senai from '../assets/Senai.jpg'

export const Historico = () => {

    return(
        <>
            <div className={style.page}>
                <div className={style.principal}>
                    <h1>Experiência Profissional</h1>
                </div>
                <div className={style.deck}>

                    <div className={style.card}>
                        <h5 className={style.cardTittle}>Desenvolvedor Web</h5>
                        <img src={senai} alt="Imagem daora" />
                        <div>
                            <h6>Empresa XYZ</h6>
                            <p>Trabalhei no desenvolvimento de aplicações web utilizando tecnologias como HTML, CSS, JavaScript e frameworks modernos.</p>
                        </div>
                    </div>


                    <div className={style.card}>
                        <div>
                            <h5>Analista de Sistemas</h5>
                            <h6>Empresa ABC</h6>
                            <p>Responsável pela análise e especificação de requisitos de sistemas, elaboração de documentação e suporte técnico aos usuários.</p>
                        </div>
                    </div>


                    <div className={style.card}>
                        <div>
                            <h5>Gerente de Projetos</h5>
                            <h6>Empresa DEF</h6>
                            <p>Gerenciei projetos de tecnologia, coordenando equipes e garantindo a entrega no prazo e dentro do orçamento.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>  
    )
}