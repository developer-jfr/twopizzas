import { useTronlink } from "use-tronlink";
import styles from "./index.module.scss";
//Icon
import hix from "assets/icons/hix.svg";
import { useState } from "react";
import TronWeb  from 'tronweb';

const ModalPay = () => {
  //@ts-ignore
  const [tronPublicKey, setTronPublicKey] = useState(window?.tronWeb?.defaultAddress?.base58);
  const tronkLinkConnect = async () => {
    //@ts-ignore
    if (window?.tronWeb && window?.tronWeb?.defaultAddress?.base58) {
      //@ts-ignore
      window?.tronLink.request({ method: "tron_requestAccounts" });
      //@ts-ignore
      setTronPublicKey(window?.tronWeb?.defaultAddress?.base58);
    } else {
      alert('Please download tronlink')
    }
  };
  const sendTranzaction = async (fromAddress: string, toAddress:string, amount:number, privateKey:string, AppKey:string) => {
    const tronWeb = new TronWeb({
        fullHost: 'https://api.shasta.trongrid.io',
        "TRON-PRO-API-KEY": AppKey,  
        privateKey: privateKey,
    });

    const tradeobj = await tronWeb.transactionBuilder.sendTrx(
          tronWeb.address.toHex(toAddress),
          amount * 1000 * 1000,
          tronWeb.address.toHex(fromAddress)
    );
    const signedtxn = await tronWeb.trx.sign(
          tradeobj,
          privateKey
    );

    const receipt = await tronWeb.trx.sendRawTransaction(
          signedtxn
    );

    const contract = await tronWeb.trx.getTransactionInfo("c1bd8fe3e219820f64a16176e585dfb1abcb150f11869cd29fabcb3bd89935d4").then((result:any) => {console.log(result)});
};

const toAddress = "TFJ1Asirf17MnutnemZuji5GAbCKvT6NUd";
const fromAddress = "TE873zDvXuhf2vZrvVLc6U3mDGUowZaCXF";
const amount = 500;
const privateKey = "778f87e65acf9fd682e9b1671e2580f3611ca9f9e8c2487a38a117158ff0678a";
const AppKey = "aca08c60-2483-4e54-bd26-f308f153941a";


  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className={`modal-card ${styles.modal_card}`}>
        <div className={styles.modal_close}>
          <img src={hix} alt="hix" />
        </div>
        <section className="modal-card-body">
          <div
            onClick={() => tronkLinkConnect()}
            className="box has-text-centered has-text-weight-bold is-size-4 is-clickable"
          >
            TronLink
          </div>
          <button
            onClick={() => sendTranzaction(fromAddress,toAddress,amount,privateKey,AppKey)}
            className="box has-text-centered has-text-weight-bold is-size-4 is-clickable"
            disabled={tronPublicKey ? true : false}
          >
            Send Transaction
          </button>
        </section>
      </div>
    </div>
  );
};

export default ModalPay;
// onClick={() => sendTranzaction(fromAddress,toAddress,amount,privateKey,AppKey)}