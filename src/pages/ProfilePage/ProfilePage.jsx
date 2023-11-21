import StoreTitleAndDescription from "../../components/StoreTitleAndDescription/StoreTitleAndDescription";
import Styles from './ProfilePage.module.css'
import { useUser } from "../../contexts/useUser";
import AddAPost from "../../components/AddAPost/AddAPost";
import CardProduct from "../../components/CardProduct/CardProduct";

export default function ProfilePage() {
  const {user} = useUser()
  return (
    <div className={Styles.container}>
      <StoreTitleAndDescription userName={`Your Profile, ${user.name}`} showDescription={false} photoURL={user.photoURL}/>
      <h3 className={Styles.subtitle}>Your products</h3>
      <CardProduct/>
      <AddAPost/>
    </div>
  )
}
