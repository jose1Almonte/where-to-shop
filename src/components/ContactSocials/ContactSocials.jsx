import Styles from './ContactSocials.module.css'
import facebook from '../../vectors/facebook.svg'
import instagram from '../../vectors/instagram.svg'
import twitter from '../../vectors/twitter.svg'

const networks = [
    {
        logo: facebook,
    },
    {
        logo: instagram,
    },
    {
        logo: twitter,
    },
]

export default function ContactSocials() {
  return (
    <div className={Styles.container}>
        {
            networks.map((network, index) => (
            <div className={Styles.socialContainer} key={index}>
                <img src={network.logo} alt="" className={Styles.socialNetwork} style={index == 2 ? {width: '40%'}:{}}/>
            </div>
            ))
        }
    </div>
  )
}
