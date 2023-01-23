import Products from '../../features/Products/Products';
import styles from './FeaturedBlends.module.scss'

const FeaturedBlends = () => {
    return (
        <div className={styles.wrapper} >
            <h1>FeaturedBlends</h1>
            <Products/>
            
        </div>
      );
}
 
export default FeaturedBlends;