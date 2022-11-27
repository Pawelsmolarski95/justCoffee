import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src='https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11' alt='coffe'/>
            <h2 className={styles.subtitle}>It's more than normal coffee</h2>
        </div>
      );
}
 
export default Hero;
