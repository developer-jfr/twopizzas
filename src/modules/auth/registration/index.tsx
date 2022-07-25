import styles from "./index.module.scss";
//Images
import Logo from "assets/logo.svg";
import RegI from "assets/reg-i.svg";
import RegReg from "assets/reg-reg.svg";
//Icons
import hix from "assets/icons/hix.svg";
import { Dispatch, FC, SetStateAction } from "react";


type IProps = { 
  setIsRegister: Dispatch<SetStateAction<boolean>>
}


const Registration:FC<IProps> = ({setIsRegister}) => {
  return (
    <div className="modal is-active" style={{transform: 'rotateX(0) scale(1) translateY(0)' }}>
      <div className={`modal-background ${styles.reg_background}`}></div>
      <div className={`modal-card ${styles.reg_modal}`}>
        <div className={styles.reg_header}>
          <div>
            <img className={styles.reg_header_logo} src={Logo} alt="Logo" />
          </div>
          <img onClick={() => setIsRegister(false)} className="is-clickable" src={hix} alt="hix" />
        </div>
        <section className={`modal-card-body ${styles.reg_body}`}>
          <h2 className={styles.reg_title}>Регистрация</h2>
          <div className={styles.reg_content}>
            <div className={styles.reg_input_group}>
              <input
                className={styles.reg_input}
                placeholder="Имя"
                type="text"
              />
              <input
                className={styles.reg_input}
                placeholder="Фамилия"
                type="text"
              />
              <input
                className={`mt-4 ${styles.reg_input}`}
                placeholder="Адрес электронной почты "
                type="email"
              />
              <input
                className={styles.reg_input}
                placeholder="Логин"
                type="text"
              />
              <input
                className={styles.reg_input}
                placeholder="Пароль"
                type="text"
              />
              <input
                className={styles.reg_input}
                placeholder="Повторите пароль"
                type="text"
              />
              <input
                className={styles.reg_input}
                placeholder="Адрес криптокошелька"
                type="text"
              />
              <input
                className={styles.reg_input}
                placeholder="Криптовалюта"
                type="text"
              />
              <input
                className={styles.reg_input}
                placeholder="Сеть"
                type="text"
              />
            </div>
            <div className={styles.reg_images}>
              <img src={RegI} alt="RegI" />
              <img src={RegReg} alt="RegReg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
