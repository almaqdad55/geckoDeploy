import React, { useContext } from 'react';
import { AuthContext } from '../hooks/useAuth';
import axios from 'axios';

const authenticate = async (token) => {
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: 'Bearer ' + token,
      // Accept: 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const endpoint = 'http://localhost:8081/api/hello';
  console.log('Endpoint: ' + endpoint);

  try {
    const response = await fetch(
      'http://localhost:8081/api/hello',
      requestOptions
    )
      .then((resp) => {
        resp.json();
      })
      .then((data) => {
        console.log('DATA', data);
      })
      .catch((err) => {
        console.error('CONSOSLLOLSOO:  ', err);
      });

    console.log('RESPONSE:  ', response);

    // await axios
    //   .get('http://localhost:8081/api/hello', requestOptions)
    //   .then((resp) => resp.json())
    //   .then((json) => console.log(JSON.stringify(json)));
  } catch (err) {
    console.log(err);
  }
};

const HomePage = () => {
  const { currentUser, setCurrentUser, logout, getSession } =
    useContext(AuthContext);
  console.log('CURRENT_USER: ', currentUser.idToken.jwtToken);
  //authenticate(currentUser.idToken.jwtToken);

  return (
    <h1>
      {/* <button onClick={() => authenticate(currentUser.idToken.jwtToken)}>
        Fetch
      </button> */}
      <h1></h1>
    </h1>
  );
};

export default HomePage;
