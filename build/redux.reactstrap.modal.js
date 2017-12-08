(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("normalizr"), require("react"), require("react-redux"), require("reactstrap"), require("seamless-immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "normalizr", "react", "react-redux", "reactstrap", "seamless-immutable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("normalizr"), require("react"), require("react-redux"), require("reactstrap"), require("seamless-immutable")) : factory(root["prop-types"], root["normalizr"], root["react"], root["react-redux"], root["reactstrap"], root["seamless-immutable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleDialog = undefined;
exports.openDialog = openDialog;
exports.closeDialog = closeDialog;

var _constants = __webpack_require__(1);

var c = _interopRequireWildcard(_constants);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function openDialog(name, data) {
    return {
        type: c.OPEN_DIALOG,
        dialog: {
            name: name,
            open: true,
            data: data
        }
    };
}

openDialog.propTypes = {
    name: _propTypes2.default.string.isRequired,
    data: _propTypes2.default.object
};

var toggleDialog = exports.toggleDialog = function toggleDialog(name) {
    return {
        type: c.TOGGLE_DIALOG,
        dialog: {
            name: name
        }
    };
};

toggleDialog.propTypes = {
    name: _propTypes2.default.string.isRequired
};

function closeDialog(name) {
    return {
        type: c.CLOSE_DIALOG,
        dialog: {
            name: name,
            open: false
        }
    };
}

closeDialog.propTypes = {
    name: _propTypes2.default.string.isRequired
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_DIALOG = exports.OPEN_DIALOG = 'OPEN_DIALOG';
var CLOSE_DIALOG = exports.CLOSE_DIALOG = 'CLOSE_DIALOG';
var TOGGLE_DIALOG = exports.TOGGLE_DIALOG = 'TOGGLE_DIALOG';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeDialog = exports.openDialog = exports.dialogReducer = undefined;

var _reduxReactstrapModal = __webpack_require__(5);

var _reduxReactstrapModal2 = _interopRequireDefault(_reduxReactstrapModal);

var _reducer = __webpack_require__(9);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reduxReactstrapModal2.default;
exports.dialogReducer = _reducer2.default;
exports.openDialog = _actions.openDialog;
exports.closeDialog = _actions.closeDialog;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _reactstrap = __webpack_require__(8);

var _actions = __webpack_require__(0);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxReactstrapModal = function reduxReactstrapModal(settings) {
    var name = settings.name;


    return function (WrappedComponent) {

        var ReduxReactstrapModalContainer = function ReduxReactstrapModalContainer(props) {
            return _react2.default.createElement(
                _reactstrap.Modal,
                _extends({}, settings, props),
                _react2.default.createElement(WrappedComponent, props)
            );
        };

        var mapStateToProps = function mapStateToProps(state) {

            var modal = state.dialogReducer.dialogs[name];
            var isOpen = modal && modal.open;
            var data = modal ? modal.data : undefined;
            return { isOpen: isOpen, data: data };
        };

        var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
            return {
                toggle: function toggle() {
                    dispatch((0, _actions.toggleDialog)(name));
                },

                onOpened: function onOpened() {
                    props.onOpened && props.onOpened();
                },

                onClosed: function onClosed() {
                    props.onClosed && props.onClosed();
                }
            };
        };

        return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReduxReactstrapModalContainer);
    };
};

reduxReactstrapModal.propTypes = {
    settings: _propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired
    }).isRequired
};

exports.default = reduxReactstrapModal;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(1);

var actions = _interopRequireWildcard(_constants);

var _seamlessImmutable = __webpack_require__(10);

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _normalizr = __webpack_require__(3);

var _schemas = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = (0, _seamlessImmutable2.default)({
    dialogs: {}
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    var normalized = (0, _normalizr.normalize)(action, {
        dialog: _schemas.dialogSchema
    }).entities;

    switch (action.type) {
        case actions.OPEN_DIALOG:
            return state.merge(normalized, { deep: true });

        case actions.CLOSE_DIALOG:
            return state.merge(normalized, { deep: true });

        case actions.TOGGLE_DIALOG:

            return state.updateIn(["dialogs", action.dialog.name, "open"], function (open) {
                return !open;
            });

        default:
            return state;
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialogSchema = undefined;

var _normalizr = __webpack_require__(3);

var dialogSchema = exports.dialogSchema = new _normalizr.schema.Entity('dialogs', undefined, { idAttribute: 'name' });

/***/ })
/******/ ]);
});