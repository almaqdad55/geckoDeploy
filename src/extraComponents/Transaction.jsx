import "../Styles/Transaction.css";
import { PieChart } from '@mui/x-charts/PieChart';

export const Transaction = (props) => {
    return (
      <div className="Transaction">
       
            <div className="transactionDetails">
                <div>
                    {props.Store}
                </div>
                <div>
                    {props.Amount}
                </div>
                <div>
                    {props.Date}
                </div>
                <div>
                    {props.Balance}
                </div>
                <button className="dispute">Dispute</button>
            </div>
               
      </div>
    );
  };
  
  export default Transaction;