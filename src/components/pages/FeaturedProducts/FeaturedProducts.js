
import Products from '../../features/Products/Products';
import styles from './FeaturedProducts.module.scss'

const FeaturedProducts = () => {
    return (
      <div>
        <div >
          <h3> Featured Coffees</h3>
            <Products/>
            <button>SEE ALL PRODUCTS</button>
        </div>
        
      </div>
           
      );
}
 
export default FeaturedProducts;