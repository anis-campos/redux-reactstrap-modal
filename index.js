if (process.browser) {
    module.exports = require("./dist/redux.reactstrap.modal.js");
} else
    module.exports = require("./dist/redux.reactstrap.modal.node.js");
