import {expect} from 'chai';
import {configure, mount, shallow} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


import React, {Component} from "react";
import {render} from "react-dom";
import reduxDialog, {dialogReducer, openDialog} from "../src";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const reducers = {
    dialogReducer: dialogReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);


class Test extends Component {
    render() {
        return <div className="test">Test</div>
    }
}

const BasicDialog = ({toggle, data}) => (
    <div>
        <Test data={data}/>
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
            <Dialog/>
            <a className="openModal" onClick={() => store.dispatch(openDialog('testDialog', {number: 10}))} href="#">Open
                Dialog 2</a>
        </div>
    </Provider>
);
describe('Testing Component', () => {
    it('Should Mount', () => {
        sinon.spy(Dialog.prototype, 'componentDidMount');
        const wrapper = mount(<App/>);
        expect(Dialog.prototype.componentDidMount).to.have.property('callCount', 1);
        Dialog.prototype.componentDidMount.restore();
    });

    it('Should pass data', () => {

        const wrapper = mount(<App/>);
        expect(wrapper.find(Dialog)).to.have.length(1);
        expect(wrapper.find(Provider).props().store.getState().dialogReducer.dialogs).to.deep.equal({});
        wrapper.find('.openModal').simulate('click');
        expect(wrapper.find(Provider).props().store.getState().dialogReducer.dialogs).to.deep.equal({
            testDialog: {
                name:"testDialog",
                open: true,
                data: {number: 10}
            }
        });
    })
});