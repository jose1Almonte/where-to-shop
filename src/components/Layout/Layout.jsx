import {Outlet} from 'react-router-dom';
import Styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <main>
        <Navbar/>
        <section className={Styles.body}>
            <Outlet/>
        </section>
    </main>
  )
}
