import styles from "./index.module.scss";
//Images
import Logo from "assets/logo.svg";
import Rocket from "assets/rocket.svg";
import University from "assets/university.svg";
import FuckYouImg from "assets/funckyou.svg";
import FuckMessage from "assets/fuck-message.svg";
//Icons
import hix from "assets/icons/hix.svg";
import { Dispatch, FC, SetStateAction } from "react";

type IProps = { 
  setIsFuckYou: Dispatch<SetStateAction<boolean>>
}


const FuckYou:FC<IProps> = ({setIsFuckYou}) => {
  return (
    <div className="modal is-active" style={{transform: 'rotateX(0) scale(1) translateY(0)' }}>
      <div className={`modal-background ${styles.fuck_background}`}></div>
      <div className={`modal-card ${styles.fuck_modal}`}>
        <div className={styles.fuck_header}>
          <div>
            <img className={styles.fuck_header_logo} src={Logo} alt="Logo" />
          </div>
          <div className="is-flex is-align-items-center">
            <img
              className="is-clickable"
              style={{ width: "80%", paddingRight: "9rem" }}
              src={FuckYouImg}
              alt="FuckYouImg"
            />
            <img onClick={() => setIsFuckYou(false)} className="is-clickable" src={hix} alt="hix" />
          </div>
        </div>
        <section className={`modal-card-body ${styles.fuck_body}`}>
          <div className={styles.fuck_content}>
            <div className="is-flex">
              <div className={styles.fuck_faq_content}>
                <div>
                <div className={styles.fuck_text}>
                  <h2>Как рыба называется?</h2>
                  <p>
                    крепление и развитие структуры требуют от нас анализа
                    существенных финансовых и административных условий.
                    Значимость этих проблем настолько очевидна, что укрепление и
                    развитие структуры обеспечивает широкому кругу
                    (специалистов) участие в формировании дальнейших направлений
                    развития. Таким образом сложившаяся структура организации в
                    значительной степени обуславливает создание модели развития.
                  </p>
                </div>
                <div className={styles.fuck_text}>
                  <h2>Как рыба называется?</h2>
                  <p>
                    крепление и развитие структуры требуют от нас анализа
                    существенных финансовых и административных условий.
                    Значимость этих проблем настолько очевидна, что укрепление и
                    развитие структуры обеспечивает широкому кругу
                    (специалистов) участие в формировании дальнейших направлений
                    развития. Таким образом сложившаяся структура организации в
                    значительной степени обуславливает создание модели развития.
                  </p>
                </div>
                <div className={styles.fuck_text}>
                  <h2>Как рыба называется?</h2>
                  <p>
                    крепление и развитие структуры требуют от нас анализа
                    существенных финансовых и административных условий.
                    Значимость этих проблем настолько очевидна, что укрепление и
                    развитие структуры обеспечивает широкому кругу
                    (специалистов) участие в формировании дальнейших направлений
                    развития. Таким образом сложившаяся структура организации в
                    значительной степени обуславливает создание модели развития.
                  </p>
                </div>
                </div>
              </div>
              <div>
                <img
                  className={styles.fucket_faq}
                  src={FuckMessage}
                  alt="FuckMessage"
                />
              </div>
            </div>
            <div className={styles.fuck_univ}>
              <img src={University} alt="University" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FuckYou;
