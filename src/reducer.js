import * as actions from "./constants";
import Immutable from "seamless-immutable";
import {normalize, schema} from "normalizr";


const dialogSchema = new schema.Entity('dialogs', undefined, {idAttribute: 'name'});


const initialState = Immutable({
    dialogs: {}
});


export default (state = initialState, action) => {

    const normalized = normalize(action, {
        dialog: dialogSchema
    }).entities;

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
}
