// import { useUser } from "../../contexts/UserContext";
import { useUser } from "../../contexts/useUser";
import { logout, signInWithGoogle } from "../../firebase/auth-service";
import Logout from "../Logout/Logout";
import SignUp from "../SignUp/SignUp.JSX";
import TryForFree from "../TryForFree/TryForFree";
import Styles from './NavbarLogin.module.css';
import {useNavigate} from 'react-router-dom'

export default function NavbarLogin() {
  const {user, isLoading} = useUser()
  const navigate = useNavigate()

  const handleSignWithGoogle = async () => {
    await signInWithGoogle()
  }

  const handleLogout = async () => {
    console.log('saliendo...')
    await logout()
  }

  return (
    <ul className={Styles.loginOptions}>
        {!user && !isLoading && (
          <>
            <SignUp loginAction={() => {handleSignWithGoogle()}}/>
            <TryForFree loginAction={() => {handleSignWithGoogle()}}/>
          </>
        )}

        {!!user && !isLoading && (
          <>
            <button className={`${'button'}`} onClick={() => {navigate('/profile')}}>
              {user.name}
            </button>
            <Logout logoutAction={() => {handleLogout()}}/>
          </>
        )}

        {!!isLoading && (
          <>
          <p>Loading current user...</p>
          </>
        )}
    </ul>
  )
}
