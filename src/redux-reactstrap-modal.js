import React from 'react';
import {connect} from "react-redux";
import {Modal} from "reactstrap";
import {toggleDialog} from "./actions";
import PropTypes from 'prop-types';


/**
 * HOC function that connects {Modal} to {redux}.
 * @param store: react-redux store
 * @param settings: settings to apply to the {Modal} object. "name" is required. see {@link https://reactstrap.github.io/components/modals/}
 * @returns {function(*): function(*): *}
 */
const reduxReactstrapModal = (store, settings) => {

    const {name} = settings;

    const mapStateToProps = (state) => {
        if (state.dialogReducer.dialogs !== undefined && state.dialogReducer.dialogs[name] !== undefined) {
            const modal = state.dialogReducer.dialogs[name];
            const isOpen = modal.open;
            const data = modal.data;
            return {isOpen, data};
        }

        //default state
        return {isOpen: false, data: {}};
    };

    const mapDispatchToProps = (dispatch) => ({
        toggle: () => {
            dispatch(toggleDialog(name));
        }
    });


    const modalProps = (props) => {
        //cloning props to remove unnecessary props for Modal ( they are propagated to divs and cause exceptions )
        const clone = Object.assign({}, props);

        //redux props
        delete clone.store;
        delete clone.storeSubscription;

        //props for the body
        delete clone.data;
        delete clone.toggle;

        return clone;
    };

    return (ModalContent) => {

        const ReduxReactModal = (props) => {
            return (
                <Modal {...settings} {...modalProps()}>
                    <ModalContent {...props}  />
                </Modal>
            );
        };

        const ConnectReduxReactModal = connect(mapStateToProps, mapDispatchToProps)(ReduxReactModal);

        //this step is required since react-redux v6
        return (props) => <ConnectReduxReactModal {...props} store={store}/>;


    };
};

reduxReactstrapModal.propTypes = {
    store: PropTypes.object.isRequired,
    settings: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
};


export default reduxReactstrapModal;
