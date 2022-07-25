import styles from "./index.module.scss";
//Images
import Logo from "assets/logo.svg";
import WhereFly from "assets/where-fly.svg";
import FuckYou from "assets/funckyou.svg";
import NotClick from "assets/notclick.svg";
import Register from "assets/register.svg";
import { Dispatch, FC, SetStateAction } from "react";

type IProps = {
  setIsRegister: Dispatch<SetStateAction<boolean>>
  setIsWhereFly: Dispatch<SetStateAction<boolean>>
  setIsFuckYou: Dispatch<SetStateAction<boolean>>
}

const NavBar:FC<IProps> = ({setIsRegister, setIsWhereFly, setIsFuckYou}) => {
  return (
    <nav className={`navbar ${styles.navbar_wrapp}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img className="navbar-item" style={{height: '65%'}} src={Logo} alt="Logo" />

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        

        <div className="navbar-end" style={{gap: '90px', marginTop: '-70px', marginLeft: '150px'}} >
          <div className={`navbar-item ${styles.navbar_item}`}  onClick={() => setIsWhereFly(true)}>
            <img src={WhereFly} alt="WhereFly" />
          </div>
          <div className={`navbar-item ${styles.navbar_item}`} onClick={() => setIsFuckYou(true)}>
            <img src={FuckYou} alt="FuckYou" />
          </div>
          <div className={`navbar-item ${styles.navbar_item}`} >
            <img src={NotClick} alt="NotClick" />
          </div>
          <div className={`navbar-item ${styles.navbar_item}`}  onClick={() => setIsRegister(true)} >
            <img src={Register} style={{maxHeight: '3rem'}} alt="Register" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
