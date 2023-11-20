import Styles from './AddAPostText.module.css'

export default function AddAPostText() {
    return (
        <>
        <section className={Styles.firstTextBlock}>
            <p className={`${Styles.firstText} ${Styles.shadow}`}>Add Your Products</p>
            <p className={`${Styles.secondText} ${Styles.shadow}`}>{"Everyone'll see your items"}</p>
        </section>
        <p className={`${Styles.thirdText} ${Styles.shadow}`}>Make the difference and add your own product to this awesome page</p>
        </>
    )
}
