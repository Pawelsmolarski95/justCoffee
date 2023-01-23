import styles from './Product.module.scss'

const Product = ({key, ...item}) => {
    return ( 
            <div className={styles.product} key={item.id}>
              <div className={styles.imgDiv}>
                <img className={styles.img}  src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt='cofee'></img></div>
              <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>Lorem ipsum</p>
                <p>{item.price}</p> 
                <button>Add Card</button>
              </div>
            </div>
        
     );
}
 
export default Product;
