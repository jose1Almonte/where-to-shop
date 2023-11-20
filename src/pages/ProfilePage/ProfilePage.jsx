import StoreTitleAndDescription from "../../components/StoreTitleAndDescription/StoreTitleAndDescription";
import Styles from './ProfilePage.module.css'
import { useUser } from "../../contexts/useUser";
import CardStoresSection from "../../components/CardStoresSection/CardStoresSection";
import AddAPost from "../../components/AddAPost/AddAPost";

export default function ProfilePage() {
  const {user} = useUser()
  return (
    <div className={Styles.container}>
      <StoreTitleAndDescription userName={`Your Profile, ${user.name}`} showDescription={false} photoURL={user.photoURL}/>
      <h3 className={Styles.subtitle}>Your products</h3>
      
      <CardStoresSection/> {/*TODO: CHANGE THIS */}

      <AddAPost/>
    </div>
  )
}
