import Carousel from 'react-bootstrap/Carousel';
import ButtonHero from '../Buttons/ButtonHero';
import styles from './Carousel.module.scss'

const CarouselHero = () => {
  return (
    <div className={styles.wrapper}>
        <Carousel indicators={false} fade>
      <Carousel.Item>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/carouselhero_1.webp`}
          alt="First slide"       
        />
        <div class={styles.title}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <ButtonHero> READ MORE </ButtonHero>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/carouselhero_2.jpeg`}
          alt="Second slide"
        />
        <div class={styles.title}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <ButtonHero> READ MORE </ButtonHero>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/carouselhero_3.jpeg`}
          alt="Third slide"
        />
        <div class={styles.title}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <ButtonHero> READ MORE </ButtonHero>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default CarouselHero;