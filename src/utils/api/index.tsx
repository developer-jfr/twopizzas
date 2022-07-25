import axios from "axios";
import { transactionType } from "utils/type";


export const instance = axios.create({
    baseURL: "https://api.shasta.trongrid.io/wallet/",
    method: 'eth_sendTransaction',
    headers: { 
        'Content-Type': 'application/json' ,
        'TRON-PRO-API-KEY': 'aca08c60-2483-4e54-bd26-f308f153941a'
   }
});



export const tronAPI = (to_address: string, owner: string, amount: number) => {
  return instance
    .post<transactionType>(`createtransaction`, { to_address, owner, amount })
    .then((res) => console.log(res.data));
}