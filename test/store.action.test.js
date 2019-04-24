import * as actions from '../src/actions';
import * as c from '../src/constants';

describe('Open dialog', () => {
    it('should create an action to open a dialog', () => {
        expect(actions.openDialog('modal1')).toEqual({
            type: c.OPEN_DIALOG,
            dialog: {
                name: "modal1",
                open: true,
                data: undefined
            }
        });
    });

    it('should create an action to open a dialog with data', () => {
        expect(actions.openDialog('modal1', {a: {nested: {object: "works"}}})).toEqual({
            type: c.OPEN_DIALOG,
            dialog: {
                name: "modal1",
                open: true,
                data: {a: {nested: {object: "works"}}}
            }
        });
    });
});

describe('Close dialog', () => {
    it('should create an action to close a dialog', () => {
        expect(actions.closeDialog('modal1')).toEqual({
            type: c.CLOSE_DIALOG,
            dialog: {
                name: "modal1",
                open: false
            }
        });
    });
});

