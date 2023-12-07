import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers/index';
import { App } from './components';
import './styles/index.css';

import app,{auth} from './utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import{setUser} from './actions/authActionCreator';
import { ToastProvider } from 'react-toast-notifications';

//=====================logger function==============================
const logger=({dispatch,getState})=>(next)=>(action)=>{
      //middleware code
      console.log("ACTION_TYPE=",action.type);
      next(action);
    }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));

//set User in state if user 
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(setUser(user));
  } 

});
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
        <Router> 
          <Provider store={store}>
            <App/>
          </Provider>,
        </Router>
      </ToastProvider>
  </>
);