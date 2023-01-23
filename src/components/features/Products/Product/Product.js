import styles from './Product.module.scss'

const Product = ({key, ...item}) => {
    return ( 
        <div className='col-4'>
            <div className={styles.product} key={item.id}>
              <div className={styles.imgDiv}>
                <img className={styles.img} src='https://cdn.shopify.com/s/files/1/0566/9965/0230/products/p8_720x.jpg?v=1636355752' alt='cofee'></img></div>
              <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>Lorem ipsum</p>
                <p>{item.price}</p> 
                <button>Add Card</button>
              </div>
            </div>
        </div>
        
     );
}
 
export default Product;
