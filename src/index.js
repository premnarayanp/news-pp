import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import {createStore,applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers/index';
import { App } from './components';
import './styles/index.css';

//=====================logger function==============================
const logger=({dispatch,getState})=>(next)=>(action)=>{
      //middleware code
      console.log("ACTION_TYPE=",action.type);
      next(action);
    }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <Router> 
          <Provider store={store}>
            <App/>
          </Provider>,
        </Router>
  </>
);

