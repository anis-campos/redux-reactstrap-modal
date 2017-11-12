import React from 'react'
import {connect} from "react-redux";
import {Modal} from "reactstrap";
import {toggleDialog} from "./actions";
import PropTypes from 'prop-types';

const reduxReactstrapModal = (settings) => {

    const {name} = settings;

    return (WrappedComponent) => {

        const ReduxReactstrapModalContainer = (props) => {
            return (
                <Modal {...settings} {...props}>
                    <WrappedComponent {...props} />
                </Modal>
            );
        };

        const mapStateToProps = (state) => {

            let modal = state.dialogReducer.dialogs[name];
            let isOpen = modal && modal.open;
            let data = modal ? modal.data : undefined;
            return {isOpen: isOpen, data: data};
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

reduxReactstrapModal.propTypes = {
    settings: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
};


export default reduxReactstrapModal;
