import reducer from '../src/reducer';
import {normalize} from "normalizr";
import {dialogSchema} from '../src/schemas';
import * as actions from '../src/actions';

describe('modal reducer', () => {

    const normalizeArray = (obj) => {
        const map = obj.map((elem) => elem.dialog);
        return normalize(map, [dialogSchema]).entities;
    };

    const normalizeOne = (obj) => {
        const map = obj.map((elem) => elem.dialog);
        return normalize(map, [dialogSchema]).entities;
    };


    it('should return the initial state', () => {
        const initialState = {
            dialogs: {}
        };
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should return the initial state, with values', () => {
        const initialState = {
            i: {
                have: "some values"
            },
            dialogs: {}
        };
        const state = {
            i: {
                have: "some values"
            }
        };
        expect(reducer(state, {})).toEqual(initialState);
    });


    it('should handle 1 OPEN_DIALOG', () => {
        const state = reducer(undefined, actions.openDialog('modal-1'));
        const normalizer = (obj) => normalize(obj, {dialog: dialogSchema}).entities;
        const normalized = normalizer(actions.openDialog('modal-1'));
        expect(state).toEqual(normalized);
    });

    it('should handle 2 OPEN_DIALOG', () => {
        let state = reducer(undefined, actions.openDialog('modal-1'));
        state = reducer(state, actions.openDialog('modal-2'));
        const normalized = normalizeOne([actions.openDialog('modal-1'), actions.openDialog('modal-2')]);
        expect(state).toEqual(normalized);
    });


    it('should handle 2 OPEN_DIALOG and 1 TOGGLE_DIALOG', () => {
        let state = reducer(undefined, actions.openDialog('modal-1'));
        state = reducer(state, actions.openDialog('modal-2'));
        state = reducer(state, actions.toggleDialog('modal-1'));
        const normalized = normalizeArray([actions.openDialog('modal-1'), actions.openDialog('modal-2'), actions.closeDialog('modal-1')]);
        expect(state).toEqual(normalized);
    });

    it('should handle 2 OPEN_DIALOG and 1 CLOSE_DIALOG', () => {
        let state = reducer(undefined, actions.openDialog('modal-1'));
        state = reducer(state, actions.openDialog('modal-2'));
        state = reducer(state, actions.closeDialog('modal-1'));
        const normalized = normalizeArray([actions.openDialog('modal-1'), actions.openDialog('modal-2'), actions.closeDialog('modal-1')]);
        expect(state).toEqual(normalized);
    });
});