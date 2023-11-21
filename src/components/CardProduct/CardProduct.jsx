import ProductQuantitySelection from '../ProductQuantitySelection/ProductQuantitySelection'
import Styles from './CardProduct.module.css'

export default function CardProduct() {
  return (
    <div className={Styles.container}>
      <div className={Styles.userPost} style={{backgroundImage: `url(data:image/jpeg;base64,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)`}}/>
      <p className={Styles.title}>Harina Pan</p>
      <ProductQuantitySelection/>
    </div>
  )
}
