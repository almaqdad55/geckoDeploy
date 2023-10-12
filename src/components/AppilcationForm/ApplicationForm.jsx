import React, { useState, useRef } from 'react';
import FormUserDetails from './FormUserDetails';
import FormCitizenship from './FormCitizenship';
import FormIncome from './FormIncome';
import FormIdVerification from './FormIdVerification';
import Confirm from './Confirm';
import Success from './Success';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);

  const [show, setShow] = useState(false);

  const [isCitizen, setIsCitizen] = useState(true);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    isOtherName: false,
    otherName: '',
    email: '',
    mobile: null,
    gender: '',
    dob: null,
    citizenShip: false,
    visaType: '',
    income: null,
    incomeFrequency: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //   const handleFieldChnage = (input) => (e) => {
  //     setValues({ ...values, [input]: e.target.value });
  //   };

  const handleFieldChnage = (input) => {
    return (event) => {
      setValues({ ...values, [input]: event.target.value });
    };
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleFieldChnage={handleFieldChnage}
          values={values}
          show={show}
          setShow={setShow}
        />
      );
    case 2:
      return (
        <FormCitizenship
          nextStep={nextStep}
          prevStep={prevStep}
          handleFieldChnage={handleFieldChnage}
          values={values}
          isCitizen={isCitizen}
          setIsCitizen={setIsCitizen}
        />
      );
    case 3:
      return (
        <FormIncome
          nextStep={nextStep}
          prevStep={prevStep}
          handleFieldChnage={handleFieldChnage}
          values={values}
        />
      );
  }

  return <div>ApplicationForm</div>;
};

export default ApplicationForm;
