import { useState, useEffect } from 'react';
import styles from './NavBar.module.scss'
import {GiHamburgerMenu} from 'react-icons/gi';
import {GiCoffeePot} from 'react-icons/gi';
import {BsBasket} from 'react-icons/bs';
import {BsFillPersonFill} from 'react-icons/bs';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import DeskopNavigation from './DeskopNavigation/DeskopNavigation';


const NavBar = () => {
    
    const [open, setOpen] = useState(false) // state for switching Mobile/Deskop
	const [scrolled,setScrolled] = useState(false); // state for scrolling
	
	const handleScroll=() => {
		const offset=window.scrollY;
		if(offset > 10 ){
		setScrolled(true);
		}
		else{
		setScrolled(false);
		}
  	}

	useEffect(() => {
		window.addEventListener('scroll',handleScroll)
	})
	let navbarClasses=['navbar'];
		if(scrolled){
			navbarClasses.push('scrolled');
		}

    
    return (
        <>
            <div className={styles.navbar}>
								<div className={styles.title}>
									<GiCoffeePot size="30px"/><span>just</span><span>Coffee</span>
								</div>
								<div className={styles.Deskop}>
										<DeskopNavigation />
								</div>
								<div className={styles.Mobile}>
										<MobileNavigation open={open}/>
								</div>
								<div className={styles.logoRightSide}>
									<BsBasket size="20px" />
									<BsFillPersonFill size="20px"/>
								</div>
							
							
								<GiHamburgerMenu className={styles.hamburger} size="40px" color="white" onClick={()=> setOpen(!open)}/> 
          </div>
  
        </>
        
      );
}
 
export default NavBar;