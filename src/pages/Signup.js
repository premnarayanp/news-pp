import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import styles from '../styles/login.module.css';
import { Navigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../utils/firebase';
import{setUser,successSignUp} from '../actions/authActionCreator';

const Signup = (props) => {
  //const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signingUp, setSigningUp] = useState('');
  const { addToast } = useToasts();
  const {isSignUpSuccess,user}=props.auth;
  const {dispatch} =props

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);

    let error = false;
    if (!email || !password) {
      addToast('Please fill all the fields', {
        appearance: 'error',
        autoDismiss: true,
      });
      error = true;
    }

    if (password !== confirmPassword) {
      addToast('Make sure password and confirm password matches', {
        appearance: 'error',
        autoDismiss: true,
      });

      error = true;
    }

    if (error) {
      return setSigningUp(false);
    }
     
     try {
        const userCredential=  await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user); 
        if(user){
          dispatch(setUser(user));
          dispatch(isSignUpSuccess(true));
          addToast('You registered successfully', {
            appearance: 'success',
            autoDismiss: true,
          });
        }
     } catch (error) {
        addToast(error.message, {
           appearance: 'error',
           autoDismiss: true,
        });
    }
    setSigningUp(false);
  };

  if (user || isSignUpSuccess) {
    return (
      <Navigate to="/" replace={true} />
    )
  }

  return (
    <form className={styles.loginForm} onSubmit={handleFormSubmit}>
      <span className={styles.loginSignupHeader}> Signup</span>

      <div className={styles.field}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
        />
      </div>


      <div className={styles.field}>
        <input
          placeholder="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

     

      <div className={styles.field}>
        <input
          placeholder="Confirm password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      
      <div className={styles.field}>
        <button disabled={signingUp}>
          {signingUp ? 'Signing up...' : 'Signup'}
        </button>
      </div>
    </form>
  );
};

export default Signup;
