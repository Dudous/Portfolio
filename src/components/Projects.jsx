import Carousel from 'react-bootstrap/Carousel';
import pokevoice from '../assets/pokemon.jpg'
import style from './Projects.module.css'

export const Projects = () => {
  return (
    <>
        <div className={style.page} id='Projects'>
            <h1>Projects</h1>
                <Carousel className={style.principal}>
                <Carousel.Item>
                    <img src={pokevoice} className={style.fotoCarousel}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={pokevoice} className={style.fotoCarousel}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={pokevoice} className={style.fotoCarousel}/>
                </Carousel.Item>
                </Carousel>
        </div>
    </>
  );
}
