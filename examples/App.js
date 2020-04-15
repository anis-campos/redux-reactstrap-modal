

import React from "react";
import reduxDialog, { dialogReducer, openDialog } from "../src";
import { combineReducers, createStore } from "redux";
import { Provider, connect } from "react-redux";
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import logo from './logo.svg';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";

const reducers = {
  dialogReducer: dialogReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const BasicDialog = ({ toggle }) => (
  <div>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.
        </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
  </div>
);

const Dialog = reduxDialog(connect, {
  name: 'testDialog'
})(BasicDialog);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a exemple of react dialog handled with redux correclty using <code>redux-reactstrap-modal</code>
        </p>

        <button onClick={() => store.dispatch(openDialog('testDialog'))}>
          Open Dialog
        </button>
        <a
          className="App-link"
          href="https://github.com/anis-campos/redux-reactstrap-modal/#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          To learn more 
        </a>


      </header>
    </div>
    <Dialog />
  </Provider>
);

export default App;
