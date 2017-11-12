import reducer from '../src/reducer'
import {normalize} from "normalizr";
import {dialogSchema} from '../src/schemas'

describe('favorite reducer', () => {


    it('should return the initial state', () => {
        const initialState = {
            dialogs: {}
        };
        expect(reducer(undefined, {})).to.deep.equal(initialState)
    });

});