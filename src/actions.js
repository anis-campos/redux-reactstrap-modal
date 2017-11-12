import * as c from "./constants";

export function openDialog(name) {
    return {
        type: c.OPEN_DIALOG,
        dialog: {
            name: name,
            open: true
        }
    }
}

export const toggleDialog = (name) => {
    return {
        type: c.TOGGLE_DIALOG,
        dialog: {
            name: name,
        }
    }
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
