import React from 'react'
import {connect} from "react-redux";
import {Modal} from "reactstrap";
import {toggleDialog} from "./actions";

const reduxReactstrapModal = (defaults) => {

    const {
        name
    } = defaults;

    return (WrappedComponent) => {

        const ReduxReactstrapModalContainer = (props) => {
            return (
                <Modal {...defaults} {...props}>
                    <WrappedComponent {...props} />
                </Modal>
            );
        };

        const mapStateToProps = (state) => {

            let modal = state.dialogReducer.dialogs[name];
            let isOpen = modal && modal.open;
            return {isOpen: isOpen};
        };

        const mapDispatchToProps = (dispatch, props) => ({
            toggle: () => {

                dispatch(toggleDialog(name))
            },

            onOpened: () => {
                props.onOpened && props.onOpened();
            },

            onClosed: () => {
                props.onClosed && props.onClosed();
            }
        });

        return connect(mapStateToProps, mapDispatchToProps)(ReduxReactstrapModalContainer);

    };
};

export default reduxReactstrapModal;
