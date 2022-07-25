import { useState } from "react";
import NavBar from "components/nav-bar";
import Footer from "components/footer";
import styles from "./index.module.scss";
//Images
import Rocket from "assets/rocket.svg";
import Planet from "assets/bg-gif.gif";
import Fly from "assets/fly.svg";
import Places from "assets/places.svg";
import { FuckYouModule, RegistrationModule, WhereFlyModule } from "modules";
import ModalPay from "components/modal-pay";

const Home = () => {
const [isRegister, setIsRegister] = useState<boolean>(false);
const [isWhereFly, setIsWhereFly] = useState<boolean>(false);
const [isFuckYou, setIsFuckYou] = useState<boolean>(false);

  return (
    <div className={styles.landing_wrapp}>
      <NavBar setIsRegister={setIsRegister} setIsWhereFly={setIsWhereFly} setIsFuckYou={setIsFuckYou} />
      {isRegister && <RegistrationModule setIsRegister={setIsRegister} />}
      {isWhereFly && <WhereFlyModule setIsWhereFly={setIsWhereFly} />}
      {isFuckYou && <FuckYouModule  setIsFuckYou={setIsFuckYou} />}
      <ModalPay />
      <div className={styles.content_wrapp}>
        <div>
          <div>
            <img src={Rocket} alt="Rocket" style={{width: '55%'}} />
            <p className={styles.landing_title}>
              Собираем команду на первую
              <br /> неизвестную планету, ты с нами?
              <br /> Жми кнопку!
            </p>
          </div>
          <div className={styles.buttons_wrapp}>
            <img src={Fly} alt="Fly" />
            <img src={Places} alt="Places" />
          </div>
        </div>
        <div>
          <img style={{ marginTop: "-70px" }} src={Planet} alt="Planet" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
