import { Link } from 'react-router-dom';
import Styles from './ProductPreviewText.module.css';

export default function ProductPreviewText() {
  return (
    <div className={Styles.container}>
        <section className={Styles.content}>
            <h6 className={`${Styles.workSans} ${Styles.priceAndOffer} ${Styles.titleColor}`}>5.22$ | IN OFFER</h6>
            
            <h6 className={`${Styles.titleColor} ${Styles.title}`}>Cheese</h6>
            
            <p className={`${Styles.workSans} ${Styles.description}`}>Is made mostly of milk, whether from cows, sheep, goats, buffalo or a blend of these milks. A coagulant is a substance added to milk to help solids form out of the liquid portion.</p>
            
            <Link className={Styles.link}>
                <p className={`${Styles.workSans} ${Styles.priceAndOffer} ${Styles.buttonText}`}>READ MORE</p>
            </Link>

        </section>
    </div>
  )
}
