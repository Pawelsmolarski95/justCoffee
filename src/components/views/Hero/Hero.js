import CarouselHero from '../../common/Carousel/Carousel';
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <CarouselHero />
        </div>
      );
}
 
export default Hero;
