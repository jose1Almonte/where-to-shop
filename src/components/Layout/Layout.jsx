import {Outlet} from 'react-router-dom';
import Styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar';
import { UserContextProvider } from '../../contexts/UserContext';

export default function Layout() {
  return (
    <main>
      <UserContextProvider>
        <Navbar/>
        <section className={Styles.body}>
            <Outlet/>
        </section>
      </UserContextProvider>
    </main>
  )
}
