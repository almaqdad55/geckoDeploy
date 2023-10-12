import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

import Pool from '../constants/UserPool';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [userObject, setUserObject] = useState(null);

  const authenticate = async (token) => {
    const requestOptions = {
      method: 'GET',
      headers: { Authentication: `Bearer ${token}` },
    };

    const endpoint = 'http://localhost:8081/api/hello';
    console.log('Endpoint: ' + endpoint);
    fetch(endpoint, requestOptions).then((response) =>
      console.log('RES ', response)
    ); //  <-- this line is just boilerplate code, it tells JS to 'render' the response into a json object
    //.then((respon) => console.log('ENDPOINT: ', respon));
  };

  const login = useCallback(async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess: ', data);
          resolve(data);
          setCurrentUser(data);
          console.log('ID_TOKEN: ', data.accessToken.jwtToken);
        },
        onFailure: (err) => {
          console.error('onFailure: ', err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired: ', data);
          resolve(data);
        },
      });
    });
  }, []);

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession(async (err, session) => {
          if (err) {
            console.log(err);
            reject();
          } else {
            const attributes = await new Promise((resolve, reject) => {
              user.getUserAttributes((err, attributes) => {
                if (err) reject(err);
                else {
                  const results = {};
                  for (let attribute of attributes) {
                    const { Name, Value } = attribute;
                    results[Name] = Value;
                  }

                  resolve(results);
                }
              });
            });
            resolve({ user, ...session, ...attributes });
          }
        });
      } else reject();
    });
  };

  const logout = useCallback(() => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      setCurrentUser(null);
      console.log('LOGOUT: ', currentUser);
      console.log('LOGOUT: ', user);
    }
  }, []);

  // const logout = () => {
  //   const user = Pool.getCurrentUser();
  //   if (user) {
  //     user.signOut();
  //     setCurrentUser(null);
  //     console.log('LOGOUT: ', currentUser);
  //     console.log('LOGOUT: ', user);
  //   }
  // };

  const verifyUser = (Username, verifyCode, callback) => {
    const user = new CognitoUser({
      Username,
      Pool,
    });

    user.confirmRegistration(verifyCode, true, callback);
  };

  // useEffect(() => {
  //   if (currentUser) {
  //     localStorage.setItem('user', JSON.stringify(currentUser));
  //   } else {
  //     localStorage.removeItem('user');
  //   }
  // }, [currentUser]);

  // useEffect(() => {
  //   getSession()
  //     .then((data) => {
  //       setCurrentUser(data);
  //       //setUserObject(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [login]);

  const authContextValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      login,
      logout,
      getSession,
      verifyUser,
    }),
    [currentUser, setCurrentUser, login, logout, getSession, verifyUser]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
