import React, {Component} from "react";
import {render} from "react-dom";
import reduxDialog, {dialogReducer, openDialog} from "../src";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Button,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import "bootstrap/dist/css/bootstrap.min.css";

const reducers = {
    dialogReducer: dialogReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const BasicDialog = ({toggle}) => (
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

const Dialog = reduxDialog({
    name: 'testDialog'
})(BasicDialog);

const App = () => (
    <Provider store={store}>
        <div>
            <Dialog />
            <button onClick={() => store.dispatch(openDialog('testDialog'))} href="#">Open Dialog 2</button>
        </div>
    </Provider>
);

render(<App />,
    document.getElementById('app'));
