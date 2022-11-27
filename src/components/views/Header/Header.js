import NavBar from "./Navbar/NavBar";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.wrapper}>
           <NavBar/> 
        </div>
        
      );
}
 
export default Header;