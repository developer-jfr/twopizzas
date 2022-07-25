import styles from './index.module.scss';
//Images
import WeHere from "assets/we-here.svg";
import University from "assets/university.svg";
//Icons
import Telegramm from "assets/icons/telegram.svg";
import Instagramm from "assets/icons/instagram.svg";
import Twitter from "assets/icons/twitter.svg";


const Footer = () => {
  return (
    <footer className={styles.footer_wrapp} >
        <div className='is-flex' >
            <img src={WeHere} alt="WeHere" />
            <div className='is-flex' style={{paddingLeft: '15px', gap: '15px'}}>
                <img className='is-clickable' src={Telegramm} alt="Telegramm" />
                <img className='is-clickable' src={Instagramm} alt="Instagramm" />
                <img className='is-clickable' src={Twitter} alt="Twitter" />
            </div>
        </div>
        <div>
            <img src={University} alt="University" />
        </div>
    </footer>
  )
}

export default Footer