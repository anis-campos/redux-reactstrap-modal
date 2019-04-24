import * as actions from "./constants";
import Immutable from "seamless-immutable";
import {normalize} from "normalizr";
import {dialogSchema} from './schemas';


const initialState = Immutable({
    dialogs: {}
});

/**
 * Create dialogs state reducer
 * @param state
 * @param action
 * @return {{dialogs}|*}
 */
export default (state = initialState, action) => {

    const normalized = normalize(action, {
        dialog: dialogSchema
    }).entities;

    //Fix error when initial state is not immutable
    if (!Immutable.isImmutable(state))
        state = Immutable(state);

    //Fix wrong initial state
    if (!state.dialogs)
        state = state.merge(initialState, {deep: true});

    switch (action.type) {
        case actions.OPEN_DIALOG:
            return state.merge(normalized, {deep: true});


        case actions.CLOSE_DIALOG:
            return state.merge(normalized, {deep: true});


        case actions.TOGGLE_DIALOG:
            return state.updateIn(["dialogs", action.dialog.name, "open"], (open) => !open);

        default:
            return state;
    }
};
