import React, { useEffect } from 'react';
import { AuthProvider } from './hooks/useAuth';
// import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes, Outlet } from 'react-router';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import ForgotPassword from './components/ForgotPassword';
import ApplicationForm from './components/AppilcationForm/ApplicationForm';
import LandingPage from './extraComponents/LandingPage';
import CreditCards from './extraComponents/CreditCards';
import Transactions from './extraComponents/Transactions';

import ProtectiveRoutes from './utils/ProtectiveRoutes';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetPassword" element={<ForgotPassword />} />

          <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route
              path="/"
              element={
                <ProtectiveRoutes>
                  <ApplicationForm />
                </ProtectiveRoutes>
              }
            />
            <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/creditCards" element={<CreditCards />} />
            <Route path="/transactions" element={<Transactions />} />
            {/* <Route path="applyCredit" element={<ApplyCredit />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }
