import Styles from './StoreDetailPage.module.css';
import StoreTitleAndDescription from "../../components/StoreTitleAndDescription/StoreTitleAndDescription";


export default function StoreDetailPage() {
  return (
    <div className={Styles.container}>
      <StoreTitleAndDescription/>
    </div>
  )
}
