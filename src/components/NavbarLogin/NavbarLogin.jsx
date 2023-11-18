import { useUser } from "../../contexts/UserContext";
import { logout, signInWithGoogle } from "../../firebase/auth-service";
import Logout from "../Logout/Logout";
import SignUp from "../SignUp/SignUp.JSX";
import TryForFree from "../TryForFree/TryForFree";
import Styles from './NavbarLogin.module.css';

export default function NavbarLogin() {
  const {user} = useUser()
  
  const handleSignWithGoogle = async () => {
    await signInWithGoogle()
  }

  const handleLogout = async () => {
    console.log('saliendo...')
    await logout()
  }

  return (
    <ul className={Styles.loginOptions}>
        {!user ? (
          <>
            <SignUp loginAction={() => {handleSignWithGoogle()}}/>
            <TryForFree loginAction={() => {handleSignWithGoogle()}}/>
          </>
        ) : (
          <>
            <button className={`${'button'}`}>
              {user.name}
            </button>
            <Logout logoutAction={() => {handleLogout()}}/>
          </>
        )
        }
    </ul>
  )
}
