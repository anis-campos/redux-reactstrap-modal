import * as actions from '../src/actions'
import * as c from '../src/constants'

describe('Open dialog', () => {
    it('should create an action to open a dialog', () => {
        expect(actions.openDialog('modal1')).to.deep.equal({
            type: c.OPEN_DIALOG,
            dialog: {
                name: "modal1",
                open: true
            }
        })
    });
});

describe('Close dialog', () => {
    it('should create an action to close a dialog', () => {
        expect(actions.closeDialog('modal1')).to.deep.equal({
            type: c.CLOSE_DIALOG,
            dialog: {
                name: "modal1",
                open: false
            }
        })
    });
});

