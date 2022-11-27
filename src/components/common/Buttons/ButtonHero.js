import styles from './ButtonHero.module.scss'


const ButtonHero = ({children}) => {
    return (
        <button className={styles.btn}>{children}</button>
      );
}
 
export default ButtonHero;