import styles from "./index.module.scss";
//Images
import Logo from "assets/logo.svg";
import Rocket from "assets/rocket.svg";
import University from "assets/university.svg";
import WhereCardImg from "assets/where-card-img.svg";
import WhereFlyImg from "assets/where-fly.svg";
//Icons
import hix from "assets/icons/hix.svg";
import { Dispatch, FC, SetStateAction } from "react";

type IProps = { 
  setIsWhereFly: Dispatch<SetStateAction<boolean>>
}

const WhereFly:FC<IProps> = ({setIsWhereFly}) => {
  return (
    <div className="modal is-active" style={{transform: 'rotateX(0) scale(1) translateY(0)' }}>
      <div className={`modal-background ${styles.fly_background}`}></div>
      <div className={`modal-card ${styles.fly_modal}`}>
        <div className={styles.fly_header}>
          <div>
            <img className={styles.fly_header_logo} src={Logo} alt="Logo" />
          </div>
          <div className="is-flex is-align-items-center">
            <img
              className="is-clickable"
              style={{ width: "80%", paddingRight: "7rem" }}
              src={WhereFlyImg}
              alt="WhereFlyImg"
            />
            <img onClick={() => setIsWhereFly(false)} className="is-clickable" src={hix} alt="hix" />
          </div>
        </div>
        <section className={`modal-card-body ${styles.fly_body}`}>
          <div className={styles.fly_content}>
            <div className="is-flex">
              <div className={styles.fly_text}>
                <h2>Идейные соображения высшего порядка</h2>
                <p>
                  крепление и развитие структуры требуют от нас анализа
                  существенных финансовых и административных условий. Значимость
                  этих проблем настолько очевидна, что укрепление и развитие
                  структуры обеспечивает широкому кругу (специалистов) участие в
                  формировании дальнейших направлений развития. Таким образом
                  сложившаяся структура организации в значительной степени
                  обуславливает создание модели развития.
                </p>
              </div>
              <div>
                <img className={styles.fly_rocket} src={Rocket} alt="Rocket" />
              </div>
            </div>
            <div className={styles.fly_univ}>
              <img src={University} alt="University" />
            </div>
          </div>
          <img
            className={styles.fly_card_img}
            src={WhereCardImg}
            alt="WhereCardImg"
          />
        </section>
      </div>
    </div>
  );
};

export default WhereFly;
