// import type { NextPage } from "next";
// import { useCallback } from "react";
// import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
// import styles from "./form.module.css";
// import React, { useState } from 'react';
// import { FormEvent } from "react";


// export type FormType = {
//   className?: string;
// };

// const Form: NextPage<FormType> = () => {
//   const onSSOLoginClick = useCallback(() => {
//     window.open("https://www.instagram.com/samparka.nep/");
//   }, []);

//   const onSSOLogin1Click = useCallback(() => {
//     window.open("https://reviewthis.biz/gbps");
//   }, []);
//   const [Name, setName]=useState('')
//   const [PhoneNumber, setPhoneNumber]=useState('')
//   const [Description, setDescription]=useState('')

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = {
//       Name,
//       PhoneNumber,
//       Description
//     }

//     // submit via api
//     const response = await fetch('/api/submit',{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(form)
//     })

//     const content = await response.json();
//     alert("Your review has been submitted.")

//     setName('')
//     setPhoneNumber('')
//     setDescription('')


//   }

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//           <div className={styles.formFields}>
//             <div className={styles.nameInput}>                      
//               <TextField
//                 className={styles.input}
//                 color="primary"
//                 name="Name"
//                 id="Name"
//                 label="Name"
//                 required={true}
//                 variant="outlined"
//                 sx={{ "& .MuiInputBase-root": { height: "56px" } }}
//                 value={Name}
//                 onChange={e=>setName(e.target.value)}
//               />
//             </div>
//             <div className={styles.nameInput}>
//               <TextField
//                 className={styles.input}
//                 color="primary"
//                 name="PhoneNumber"
//                 label="Phone Number"
//                 id="PhoneNumber"
//                 size="medium"
//                 required={true}
//                 variant="outlined"
//                 type="text"
//                 sx={{ "& .MuiInputBase-root": { height: "56px" } }}
//                 value={PhoneNumber}
//                 onChange={e=>setPhoneNumber(e.target.value)}
//               />
//             </div>
//             <div className={styles.nameInput}>
//               <TextField
//                 className={styles.input2}
//                 color="primary" 
//                 name="Description"
//                 id="Description"
//                 rows={4}
//                 label="Description"
//                 required={true}
//                 variant="outlined"
//                 multiline
//                 value={Description}
//                 onChange={e=>setDescription(e.target.value)}
//               />
//             </div>
//           </div>
          
//       <button className={styles.ssoLogin} onClick={onSSOLoginClick}>
//         <img className={styles.ssoIcon} alt="" src="/sso-icon@2x.png" />
//         <div className={styles.label}>Follow us on Instagram</div>
//       </button>
//       <button className={styles.ssoLogin1} onClick={onSSOLogin1Click}>
//         <img className={styles.ssoIcon1} alt="" src="/sso-icon.svg" />
//         <div className={styles.label1}>{`Review us on Google   `}</div>
//       </button>
//       <button className={styles.formSubmitButton}>
//         <div className={styles.submit}>Submit</div>
//       </button>
//     </form>
//   );
// };

// export default Form;
// Form.tsx





// import React, { useState, useCallback, FormEvent } from "react";
// import { TextField, Button, CircularProgress } from "@mui/material";
// import styles from "./form.module.css";
// import { NextPage } from "next";

// export type FormType = {
//   className?: string;
// };

// const Form: NextPage<FormType> = () => {
//   const [Name, setName] = useState('');
//   const [PhoneNumber, setPhoneNumber] = useState('');
//   const [DOB, setDOB] = useState('');
//   const [instagramLoading, setInstagramLoading] = useState(false);
//   const [instagramVerified, setInstagramVerified] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [googleVerified, setGoogleVerified] = useState(false);

//   const onSSOLoginClick = useCallback(async () => {
//     setInstagramLoading(true);
//     window.open("https://www.instagram.com/samparka.nep/");
//     // Simulate verification delay
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setInstagramLoading(false);
//     setInstagramVerified(true);
//   }, []);

//   const onSSOLogin1Click = useCallback(async () => {
//     setGoogleLoading(true);
//     window.open("https://reviewthis.biz/gbps");
//     // Simulate verification delay
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setGoogleLoading(false);
//     setGoogleVerified(true);
//   }, []);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     if (!instagramVerified || !googleVerified) {
//       alert("Please complete both actions before submitting.");
//       return;
//     }

//     const form = {
//       Name,
//       PhoneNumber,
//       DOB,
//     };

//     // submit via api
//     const response = await fetch('/api/submit', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     });

//     const content = await response.json();
//     alert("Your review has been submitted.");

//     setName('');
//     setPhoneNumber('');
//     setDOB('');
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <div className={styles.formFields}>
//         <div className={styles.nameInput}>
//           <TextField
//             className={styles.input}
//             color="primary"
//             name="Name"
//             id="Name"
//             label="Name"
//             required
//             variant="outlined"
//             value={Name}
//             onChange={e => setName(e.target.value)}
//           />
//         </div>
//         <div className={styles.nameInput}>
//           <TextField
//             className={styles.input}
//             color="primary"
//             name="PhoneNumber"
//             label="Phone Number"
//             id="PhoneNumber"
//             required
//             variant="outlined"
//             value={PhoneNumber}
//             onChange={e => setPhoneNumber(e.target.value)}
//           />
//         </div>
//         <div className={styles.nameInput}>
//           <TextField
//             className={styles.input2}
//             color="primary"
//             name="DOB"
//             id="DOB"
//             label="Date of Birth"
//             type="date"
//             required
//             InputLabelProps={{ shrink: true }}
//             variant="outlined"
//             value={DOB}
//             onChange={e => setDOB(e.target.value)}
//           />
//         </div>
//       </div>

//       <Button
//         className={`${styles.ssoLogin} ${instagramVerified ? styles.green : ''}`}
//         onClick={onSSOLoginClick}
//         disabled={instagramLoading || instagramVerified}
//       >
        
//         <img className={styles.ssoIcon} alt="" src="/sso-icon@2x.png" />
//         <div className={styles.label}>Follow us on Instagram</div>
//         {instagramLoading ? <CircularProgress size={20} color="inherit" /> : instagramVerified ? <img className={styles.checkedIcon} alt="Verified" src="/checked-icon.svg" /> : null}
//       </Button>
      
//       <Button
//         className={`${styles.ssoLogin1} ${googleVerified ? styles.green : ''}`}
//         onClick={onSSOLogin1Click}
//         disabled={googleLoading || googleVerified}
//       >
        
//         <img className={styles.ssoIcon1} alt="" src="/sso-icon.svg" />
//         <div className={styles.label1}>Review us on Google</div>
//         {googleLoading ? <CircularProgress size={20} color="inherit" /> : googleVerified ? <img className={styles.checkedIcon} alt="Verified" src="/checked-icon.svg" /> : null}
//       </Button>

//       <Button className={styles.formSubmitButton} type="submit">
//         <div className={styles.submit}>Submit</div>
//       </Button>
//     </form>
//   );
// };

// export default Form;






import React, { useState, useCallback, FormEvent } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import styles from "./form.module.css";
import { NextPage } from "next";

export type FormType = {
  className?: string;
};

const Form: NextPage<FormType> = () => {
  const [Name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [DOB, setDOB] = useState('');
  const [instagramLoading, setInstagramLoading] = useState(false);
  const [instagramVerified, setInstagramVerified] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleVerified, setGoogleVerified] = useState(false);

  const onSSOLoginClick = useCallback(async () => {
    setInstagramLoading(true);
    window.open("https://www.instagram.com/samparka.nep/");
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 10000)); // Set to 7 seconds
    setInstagramLoading(false);
    setInstagramVerified(true);
  }, []);



  const onSSOLogin1Click = useCallback(async () => {
    setGoogleLoading(true);
    window.open("https://reviewthis.biz/gbps");
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 10000)); // Set to 7 seconds
    setGoogleLoading(false);
    setGoogleVerified(true);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!instagramVerified || !googleVerified) {
      alert("Please complete all steps  before submitting.");
      return;
    }

    const form = {
      Name,
      PhoneNumber,
      DOB,
    };

    // submit via api
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();
    alert("Your review has been submitted.");

    setName('');
    setPhoneNumber('');
    setDOB('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formFields}>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="Name"
            id="Name"
            label="Name"
            required
            variant="outlined"
            value={Name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="PhoneNumber"
            label=" 10 Digit Phone Number"
            id="PhoneNumber"
            required
            variant="outlined"
            value={PhoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input2}
            color="primary"
            name="DOB"
            id="DOB"
            label="Date of Birth"
            type="date"
            required
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={DOB}
            onChange={e => setDOB(e.target.value)}
          />
        </div>
      </div>

      <Button
        className={`${styles.ssoLogin} ${instagramVerified ? styles.green : ''}`}
        onClick={onSSOLoginClick}
        disabled={instagramLoading || instagramVerified}
      >
        <img className={styles.ssoIcon} alt="" src="/sso-icon@2x.png" />
        <div className={styles.label}>Follow us on Instagram</div>

        {instagramLoading ? <CircularProgress size={20} color="inherit" className={styles.circularProgress} /> : instagramVerified ? <img className={styles.checkedIcon} alt="Verified" src="/checked-icon.svg" /> : null}
      </Button>
      
      <Button
        className={`${styles.ssoLogin1} ${googleVerified ? styles.green : ''}`}
        onClick={onSSOLogin1Click}
        disabled={googleLoading || googleVerified}
      >
        <img className={styles.ssoIcon1} alt="" src="/sso-icon.svg" />
        <div className={styles.label1}>Review us on Google</div>
        {googleLoading ? <CircularProgress size={20} color="inherit" className={styles.circularProgress} /> : googleVerified ? <img className={styles.checkedIcon} alt="Verified" src="/checked-icon.svg" /> : null}
      </Button>

      <Button className={styles.formSubmitButton} type="submit">
        <div className={styles.submit}>Submit</div>
      </Button>
    </form>
  );
};

export default Form;
