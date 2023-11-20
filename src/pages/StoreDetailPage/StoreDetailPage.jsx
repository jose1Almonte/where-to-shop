import Styles from './StoreDetailPage.module.css';
import StoreTitleAndDescription from "../../components/StoreTitleAndDescription/StoreTitleAndDescription";
import StoreProducts from '../../components/StoreProducts/StoreProducts';


export default function StoreDetailPage() {
  return (
    <div className={Styles.container}>
      <StoreTitleAndDescription showDescription={true}/>
      <StoreProducts/>
    </div>
  )
}
