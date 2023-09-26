import LinkComponent from '../LinkComponent/LinkComponent';
import Styles from './NavbarOptions.module.css'

export default function NavbarOptions() {
  
    const options = [
        {
            option: 'PRODUCTS',
            url: 'https://fonts.google.com/specimen/Poppins',
        },
        {
            option: 'STORES',
            url: 'https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md',
        },
        {
            option: 'HOME',
            url: 'https://www.youtube.com/',
        },
        {
            option: 'MORE',
            url: 'https://openai.com/blog/chatgpt',
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
