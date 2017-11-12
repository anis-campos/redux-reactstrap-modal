import * as c from "./constants";
import PropTypes from 'prop-types';

export function openDialog(name, data) {
    return {
        type: c.OPEN_DIALOG,
        dialog: {
            name: name,
            open: true,
            data: data
        }
    }
}

openDialog.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.object,
};

export const toggleDialog = (name) => {
    return {
        type: c.TOGGLE_DIALOG,
        dialog: {
            name: name,
        }
    }
};

toggleDialog.propTypes = {
    name: PropTypes.string.isRequired,
};

export function closeDialog(name) {
    return {
        type: c.CLOSE_DIALOG,
        dialog: {
            name: name,
            open: false
        }
    }
}

closeDialog.propTypes = {
    name: PropTypes.string.isRequired,
};

