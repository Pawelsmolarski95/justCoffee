import { useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/productsReducer";
import Product from "./Product/Product";
import styles from "./Products.module.scss"

const Products = () => {
    const allProducts = useSelector(getAllProducts);
    
    return (
        <div className={styles.wrapper} >
            {allProducts.slice(0, 4).map(item => 
                <Product
                    key={item.id}
                    {...item}
                />
            )}
            
        </div>
      );
}
 
export default Products;