import ProductCard from '../ProductCard/ProductCard'
import Styles from './StoreProducts.module.css'

export default function StoreProducts() {
  return (
    <div className={Styles.container}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}
