import '../Styles/LandingPage.css';
import '../Styles/Transactions.css';
import { PieChart } from '@mui/x-charts/PieChart';
import Transaction from './Transaction';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export const Transactions = () => {
  const [age, setAge] = useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="landingPage">
      <div className="selectPosition">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Account</InputLabel>
          <Select
            className="accountSelection"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Select Account"
            onChange={handleChange}
          >
            <MenuItem value={10}>Savings</MenuItem>
            <MenuItem value={20}>Cheque</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="summary">
        <div className="chart">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 5, label: 'In $XXXX' },
                  { id: 1, value: 15, label: 'Out $XXXX' },
                ],
              },
            ]}
            width={300}
            height={100}
          />
        </div>
        <div className="accoutDetails">
          <div>Available: $XXXX </div>
          <div>Pending Transactions: $XXXX </div>
          <div>Balance: $XXXX </div>
        </div>
      </div>

      <div className="Transactions">
        <Transaction
          Store="Coles"
          Amount="$56.34"
          Date="12/10/2023"
          Balance="$1500"
        />
        <Transaction
          Store="Woolworths"
          Amount="$20.50"
          Date="12/10/2023"
          Balance="$1479.50"
        />
        <Transaction
          Store="Aldi"
          Amount="$250.00"
          Date="12/10/2023"
          Balance="$1229.50"
        />
        <Transaction
          Store="Daniels Donuts"
          Amount="$10.00"
          Date="12/10/2023"
          Balance="$1219.50"
        />
        <Transaction
          Store="KMART"
          Amount="$50.00"
          Date="12/10/2023"
          Balance="$1179.50"
        />
      </div>
    </div>
  );
};

export default Transactions;
