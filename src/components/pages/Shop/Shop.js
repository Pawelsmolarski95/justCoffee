
import Products from '../../features/Products/Products';
import styles from './Shop.module.scss'

const Shop = () => {
    return (
      <>
      <div className='row'>
        <div className='col-3'>
          <div className={styles.categories}>
            <ul className={styles.ul}>Categories
              <li className={styles.li}>Brazil</li>
              <li className={styles.li}>Cuba</li>
              <li className={styles.li}>Asia</li>
              <li className={styles.li}>Maroko</li>
              <li className={styles.li}>Japan</li>
            </ul>
          </div>
        </div>
        <div className='col-9'>
          <h3>All our products</h3>
            <Products/>
        </div>
        
      </div>
        
      </>
       
        
        
      );
}
 
export default Shop;