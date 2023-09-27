import SignUp from "../SignUp/SignUp.JSX";
import TryForFree from "../TryForFree/TryForFree";
import Styles from './NavbarLogin.module.css';

export default function NavbarLogin() {
  return (
    <ul className={Styles.loginOptions}>
        <SignUp/>
        <TryForFree/>
    </ul>
  )
}
