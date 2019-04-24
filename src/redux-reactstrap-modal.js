import {Modal} from "reactstrap";
import {toggleDialog} from "./actions";
import React from "react";

/**
 * HOC function that connects {Modal} to {redux}.
 * @param {function} connect: react-redux connect. Prevents de " Could not find store" error
 * @param settings: settings to apply to the {Modal} object see {@link https://reactstrap.github.io/components/modals/}. "name" is required.
 * @returns {function(*): function(*): *} Connected modal
 */
const reduxReactstrapModal = (connect, settings) => {

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



    return (ModalContent) => {

        const ReduxReactstrapModal = (props) => {
            return (
                <Modal {...settings} {...props}>
                    <ModalContent {...props}  />
                </Modal>
            );
        };

        return connect(mapStateToProps, mapDispatchToProps)(ReduxReactstrapModal);


    };
};


export default reduxReactstrapModal;
