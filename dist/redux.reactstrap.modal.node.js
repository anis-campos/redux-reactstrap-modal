module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("seamless-immutable");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/constants.js
/**
 * Open action
 * @type {string}
 */
var OPEN_DIALOG = 'OPEN_DIALOG';
/**
 * Close action
 * @type {string}
 */

var CLOSE_DIALOG = 'CLOSE_DIALOG';
/**
 * Toggle action
 * @type {string}
 */

var TOGGLE_DIALOG = 'TOGGLE_DIALOG';
// CONCATENATED MODULE: ./src/actions.js

/**
 * Open a modal
 * @param {string} name Name of the modal to open
 * @param {Object} data Data to send to the modal
 * @return {{dialog: {data: *, name: *, open: boolean}, type: string}}
 */

function openDialog(name, data) {
  return {
    type: OPEN_DIALOG,
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

var actions_toggleDialog = function toggleDialog(name) {
  return {
    type: TOGGLE_DIALOG,
    dialog: {
      name: name
    }
  };
};
/**
 * Close a modal
 * @param {string} name Name of the modal to close
 * @return {{dialog: {name: string, open: boolean}, type: string}}
 */

function closeDialog(name) {
  return {
    type: CLOSE_DIALOG,
    dialog: {
      name: name,
      open: false
    }
  };
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/redux-reactstrap-modal.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/**
 * HOC function that connects {Modal} to {redux}.
 * @param {function} connect: react-redux connect. Prevents de " Could not find store" error
 * @param settings: settings to apply to the {Modal} object see {@link https://reactstrap.github.io/components/modals/}. "name" is required.
 * @returns {function(*): function(*): *} Connected modal
 */

var redux_reactstrap_modal_reduxReactstrapModal = function reduxReactstrapModal(connect, settings) {
  var name = settings.name;

  var mapStateToProps = function mapStateToProps(state) {
    if (state.dialogReducer.dialogs !== undefined && state.dialogReducer.dialogs[name] !== undefined) {
      var modal = state.dialogReducer.dialogs[name];
      var isOpen = modal.open;
      var data = modal.data;
      return {
        isOpen: isOpen,
        data: data
      };
    } //default state


    return {
      isOpen: false,
      data: {}
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      toggle: function toggle() {
        dispatch(actions_toggleDialog(name));
      }
    };
  };

  return function (ModalContent) {
    var ReduxReactstrapModal = function ReduxReactstrapModal(props) {
      return external_react_default.a.createElement(external_reactstrap_["Modal"], _extends({}, settings, props), external_react_default.a.createElement(ModalContent, props));
    };

    return connect(mapStateToProps, mapDispatchToProps)(ReduxReactstrapModal);
  };
};

/* harmony default export */ var redux_reactstrap_modal = (redux_reactstrap_modal_reduxReactstrapModal);
// EXTERNAL MODULE: external "seamless-immutable"
var external_seamless_immutable_ = __webpack_require__(1);
var external_seamless_immutable_default = /*#__PURE__*/__webpack_require__.n(external_seamless_immutable_);

// EXTERNAL MODULE: external "normalizr"
var external_normalizr_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/schemas.js

var dialogSchema = new external_normalizr_["schema"].Entity('dialogs', undefined, {
  idAttribute: 'name'
});
// CONCATENATED MODULE: ./src/reducer.js




var initialState = external_seamless_immutable_default()({
  dialogs: {}
});
/**
 * Create dialogs state reducer
 * @param state
 * @param action
 * @return {{dialogs}|*}
 */

/* harmony default export */ var reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var normalized = Object(external_normalizr_["normalize"])(action, {
    dialog: dialogSchema
  }).entities; //Fix error when initial state is not immutable

  if (!external_seamless_immutable_default.a.isImmutable(state)) state = external_seamless_immutable_default()(state); //Fix wrong initial state

  if (!state.dialogs) state = state.merge(initialState, {
    deep: true
  });

  switch (action.type) {
    case OPEN_DIALOG:
      return state.merge(normalized, {
        deep: true
      });

    case CLOSE_DIALOG:
      return state.merge(normalized, {
        deep: true
      });

    case TOGGLE_DIALOG:
      return state.updateIn(["dialogs", action.dialog.name, "open"], function (open) {
        return !open;
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport dialogReducer */__webpack_require__.d(__webpack_exports__, "dialogReducer", function() { return reducer; });
/* concated harmony reexport openDialog */__webpack_require__.d(__webpack_exports__, "openDialog", function() { return openDialog; });
/* concated harmony reexport closeDialog */__webpack_require__.d(__webpack_exports__, "closeDialog", function() { return closeDialog; });



/* harmony default export */ var src = __webpack_exports__["default"] = (redux_reactstrap_modal);


/***/ })
/******/ ]);
//# sourceMappingURL=redux.reactstrap.modal.node.js.map