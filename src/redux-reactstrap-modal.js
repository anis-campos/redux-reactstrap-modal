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

    return (WrappedComponent) => {

        const ReduxReactstrapModalContainer = (props) => {
            return (
                <Modal {...settings} {...props}>
                    <WrappedComponent {...props} />
                </Modal>
            );
        };

        const mapStateToProps = (state) => {
            if (state.dialogReducer.dialogs !== undefined && state.dialogReducer.dialogs[name] !== undefined) {
                const modal = state.dialogReducer.dialogs[name];
                const isOpen = modal && modal.open;
                const data = modal ? modal.data : undefined;
                return {isOpen, data};
            }
            return {isOpen: false, data: {}};
        };

        const mapDispatchToProps = (dispatch, props) => ({
            toggle: () => {
                dispatch(toggleDialog(name));
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
    store: PropTypes.object.isRequired,
    settings: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired
};


export default reduxReactstrapModal;
