import Styles from './NavbarOptions.module.css'

export default function NavbarOptions() {
  
    const options = [
        {
            option: 'PRODUCTS',
        },
        {
            option: 'STORES',
        },
        {
            option: 'HOME',
        },
        {
            option: 'MORE',
        },
    ]
  
    return (
    <ul className={Styles.unorderedList}>
        {options.map((option, index) => (
            <li key={index}>
                {option.option}
            </li>
        ))}
    </ul>
  )
}
