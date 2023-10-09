import LinkComponent from '../LinkComponent/LinkComponent';
import Styles from './NavbarOptions.module.css'

export default function NavbarOptions() {
  
    const options = [
        {
            option: 'PRODUCTS',
            url: '',
        },
        {
            option: 'STORES',
            url: '',
        },
        {
            option: 'HOME',
            url: '',
        },
        {
            option: 'MORE',
            url: '',
        },
    ]
  
    return (
    <ul className={Styles.unorderedList}>
        {options.map((option, index) => (
            <li key={index}>
                <LinkComponent url={option.url}>
                    <span>{option.option}</span>
                </LinkComponent>
            </li>
        ))}
    </ul>
  )
}
