import Logo from '../Logo/Logo'
import NavbarOptions from '../NavbarOptions/NavbarOptions'
import Styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={Styles.box}>
        <Logo/>
        <NavbarOptions/>
        <p>Login</p>
    </div>
  )
}
