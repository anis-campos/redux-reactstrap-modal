(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("normalizr"), require("seamless-immutable"), require("react"), require("react-redux"), require("reactstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "normalizr", "seamless-immutable", "react", "react-redux", "reactstrap"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("normalizr"), require("seamless-immutable"), require("react"), require("react-redux"), require("reactstrap")) : factory(root["prop-types"], root["normalizr"], root["seamless-immutable"], root["react"], root["react-redux"], root["reactstrap"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(3);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(4);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/constants.js
var OPEN_DIALOG = 'OPEN_DIALOG';
var CLOSE_DIALOG = 'CLOSE_DIALOG';
var TOGGLE_DIALOG = 'TOGGLE_DIALOG';
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/actions.js


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
openDialog.propTypes = {
  name: external_prop_types_default.a.string.isRequired,
  data: external_prop_types_default.a.object
};
var actions_toggleDialog = function toggleDialog(name) {
  return {
    type: TOGGLE_DIALOG,
    dialog: {
      name: name
    }
  };
};
actions_toggleDialog.propTypes = {
  name: external_prop_types_default.a.string.isRequired
};
function closeDialog(name) {
  return {
    type: CLOSE_DIALOG,
    dialog: {
      name: name,
      open: false
    }
  };
}
closeDialog.propTypes = {
  name: external_prop_types_default.a.string.isRequired
};
// CONCATENATED MODULE: ./src/redux-reactstrap-modal.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var redux_reactstrap_modal_reduxReactstrapModal = function reduxReactstrapModal(settings) {
  var name = settings.name;
  return function (WrappedComponent) {
    var ReduxReactstrapModalContainer = function ReduxReactstrapModalContainer(props) {
      return external_react_default.a.createElement(external_reactstrap_["Modal"], _extends({}, settings, props), external_react_default.a.createElement(WrappedComponent, props));
    };

    var mapStateToProps = function mapStateToProps(state) {
      if (state.dialogReducer.dialogs !== undefined && state.dialogReducer.dialogs[name] !== undefined) {
        var modal = state.dialogReducer.dialogs[name];
        var isOpen = modal && modal.open;
        var data = modal ? modal.data : undefined;
        return {
          isOpen: isOpen,
          data: data
        };
      }

      return {
        isOpen: false,
        data: {}
      };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
      return {
        toggle: function toggle() {
          dispatch(actions_toggleDialog(name));
        },
        onOpened: function onOpened() {
          props.onOpened && props.onOpened();
        },
        onClosed: function onClosed() {
          props.onClosed && props.onClosed();
        }
      };
    };

    return Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ReduxReactstrapModalContainer);
  };
};

redux_reactstrap_modal_reduxReactstrapModal.propTypes = {
  settings: external_prop_types_default.a.shape({
    name: external_prop_types_default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ var redux_reactstrap_modal = (redux_reactstrap_modal_reduxReactstrapModal);
// EXTERNAL MODULE: external "seamless-immutable"
var external_seamless_immutable_ = __webpack_require__(2);
var external_seamless_immutable_default = /*#__PURE__*/__webpack_require__.n(external_seamless_immutable_);

// EXTERNAL MODULE: external "normalizr"
var external_normalizr_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/schemas.js

var dialogSchema = new external_normalizr_["schema"].Entity('dialogs', undefined, {
  idAttribute: 'name'
});
// CONCATENATED MODULE: ./src/reducer.js




var initialState = external_seamless_immutable_default()({
  dialogs: {}
});
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
});
//# sourceMappingURL=redux.reactstrap.modal.js.map