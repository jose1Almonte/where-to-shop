import { Link } from "react-router-dom";
import Styles from './BlackButton.module.css';

export default function BlackButton() {
    return (
        <Link className={Styles.link}>
            ADD PRODUCT
        </Link>
    )
}
