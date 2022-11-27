import { NavLink } from "react-router-dom";
import styles from './NavLinks.module.scss'


const NavLinks = () => {

    
    
    return (
        <ul className={styles.navbarSubtitle}>
            <li>
                <NavLink className={styles.link}to="/"> Home </NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/shop"> Shop </NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/about"> About </NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/contact"> Contact </NavLink>
            </li>
            
        </ul>  
    )
}

export default NavLinks;