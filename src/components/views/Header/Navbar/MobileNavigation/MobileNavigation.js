import NavLinks from '../NavLinks/NavLinks';
import styles from './MobileNavigation.module.scss'

const MobileNavigation = ({open}) => {
    return (
        <div className={styles.wrapper}>
            { open && <NavLinks/>}
        </div>
      );
}
 
export default MobileNavigation;