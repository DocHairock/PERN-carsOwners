import React from 'react';
import ReactDOM from 'react-dom';
import { createContext } from 'react';
import App from './App';
import UserStore from './store/UserStore';
import CarOwnerStore from './store/CarOwnerStore';

export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value={
    {
      user: new UserStore(),
      CarOwner: new CarOwnerStore(),
    }
  }>
    <App/>
  </Context.Provider>,
  
  document.getElementById('root')
);


