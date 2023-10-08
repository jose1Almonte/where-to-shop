import { useState } from 'react'
import Styles from './InformationSelect.module.css'


export default function InformationSelect() {
    const [selected, setSelected] = useState('Stores');

    const handleSelect = (value) => {
        console.log(value)
        setSelected(value)
    }

    return (
        <section className={Styles.selectionBox}>
            <span className={Styles.selection} style={selected == 'Stores' ? {color: '#00A991'}:{} } onClick={(text) => {handleSelect(text.target.textContent)}}>Stores</span>
            <span className={Styles.selection} style={selected == 'Food' ?   {color: '#00A991'}:{} } onClick={(text) => {handleSelect(text.target.textContent)}}>Food</span>
            <span className={Styles.selection} style={selected == 'Drinks' ? {color: '#00A991'}:{} } onClick={(text) => {handleSelect(text.target.textContent)}}>Drinks</span>
            <span className={Styles.selection} style={selected == 'Snacks' ? {color: '#00A991'}:{} } onClick={(text) => {handleSelect(text.target.textContent)}}>Snacks</span>
        </section>
    )
}
