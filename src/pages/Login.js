 import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import styles from '../styles/login.module.css';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../utils/firebase';
import{setUser} from '../actions/authActionCreator';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();
  const {dispatch} =props
  const {isLoginSuccess,user}=props.auth;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {

      return addToast('Please enter both email and password', {
        appearance: 'error',
      });
    }
     

    try {
      const userCredential=  await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setLoggingIn(false); 
      if(user){
        dispatch(setUser(user));
        addToast('Successfully logged in', {
          appearance: 'success',
        });
      }
   } catch (error) {
      addToast(error.message, {
         appearance: 'error',
         autoDismiss: true,
      });
  }
  };

  if (user|| isLoginSuccess ) {
    return (
      <Navigate to="/" replace={true} />
    )
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Paasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? 'Logging in...' : 'Log In'}
        </button>
      </div>
    </form>
  );
};

export default Login;
