import * as c from "./constants";

/**
 * Open a modal
 * @param {string} name Name of the modal to open
 * @param {Object} [data] Data to send to the modal
 * @return {{dialog: {data: *, name: *, open: boolean}, type: string}}
 */
export function openDialog(name, data = undefined) {
    return {
        type: c.OPEN_DIALOG,
        dialog: {
            name: name,
            open: true,
            data: data
        }
    };
}


/**
 * Toggle a modal
 * @param name Name of the modal to toggle
 * @return {{dialog: {name: string}, type: string}}
 */
export const toggleDialog = (name) => {
    return {
        type: c.TOGGLE_DIALOG,
        dialog: {
            name: name,
        }
    };
};

/**
 * Close a modal
 * @param {string} name Name of the modal to close
 * @return {{dialog: {name: string, open: boolean}, type: string}}
 */
export function closeDialog(name) {
    return {
        type: c.CLOSE_DIALOG,
        dialog: {
            name: name,
            open: false
        }
    };
}



