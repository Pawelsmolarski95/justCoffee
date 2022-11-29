
import styles from './Shop.module.scss'

const Shop = () => {
    return (
      <>
        <h3>All our products</h3>
        <div className={styles.wrapper}>
          <div className={styles.categories}>
            <ul className={styles.ul}>Categories
              <li className={styles.li}>Brazil</li>
              <li className={styles.li}>Cuba</li>
              <li className={styles.li}>Asia</li>
              <li className={styles.li}>Maroko</li>
              <li className={styles.li}>Japan</li>
            </ul>
          </div>
          <div className={styles.products}>
            <div className={styles.product}>
              <div className={styles.imgDiv}><img className={styles.img} src='https://cdn.shopify.com/s/files/1/0566/9965/0230/products/p8_720x.jpg?v=1636355752' alt='cofee'></img></div>
              <div className={styles.description}>
                <h3>Coffee</h3>
                <p>Lorem ipsum</p>
                <button>Add Card</button>
              </div>
            </div>
          </div>
        </div>
      </>
       
        
        
      );
}
 
export default Shop;