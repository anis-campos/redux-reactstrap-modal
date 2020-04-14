[![NPM](https://img.shields.io/npm/v/redux-reactstrap-modal.svg)](https://www.npmjs.com/package/redux-reactstrap-modal)
[![npm](https://img.shields.io/npm/l/redux-reactstrap-modal.svg)](https://github.com/anis-campos/redux-reactstrap-modal/blob/master/LICENCE)
[![Build Status](https://travis-ci.org/anis-campos/redux-reactstrap-modal.svg?branch=master)](https://travis-ci.org/anis-campos/redux-reactstrap-modal)
# redux-reactstrap-modal

A Higher Order Component using react-redux to keep dialog state in a Redux store

[Inspired from suciuvlad/redux-dialog](https://github.com/suciuvlad/redux-dialog)

## Example

Clone this repo then run:
```bash
npm install
npm start
```

## Install

The easiest way to use redux-reactstrap-modal is to install it from NPM and include it in your own React build process

### NPM:
```
npm install --save redux-reactstrap-modal
```

### YARN:
```
yarn add redux-reactstrap-modal
```

## Usage

The first step is to combine the redux-reactstrap-modal reducer with your own application reducers

### Step 1
```js
import {createStore, combineReducers} from 'redux';
import { dialogReducer } from 'redux-reactstrap-modal';
const reducers = {
  // Other reducers here
  dialogReducer: dialogReducer
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);
```
**Remark :**  `dialogReducer` is the name used by the internal Wrapper to access to store, it cannot by renamed.  

### Step 2

Decorate your component with reduxDialog.
```js
import {connect} from 'react-redux';
import reduxDialog from 'redux-reactstrap-modal';

const BasicDialog = () => (
  <div>
    My awesome modalbox!
  </div>
)

const Dialog = reduxDialog(
    connect, // [NEW] needed to be compatible with react-redux > 6
    {
    name: 'signupDialog' // unique name - you can't have two dialogs with the same name
    })(BasicDialog);
```

### Step 3

Use redux-reactstrap-modal's actions to show and hide the dialog
```js
import { openDialog, closeDialog } from 'redux-reactstrap-modal';
const MyComponent = () => (
  <a href="#" onClick={() => dispatch(openDialog('signupDialog'))}></a>
)
```

## Modal Props

The reduxDialog method only requires the name property to work. The rest of the optional properties can be Any valid [reactstraps's modal options](https://reactstrap.github.io/components/modals/).

#### `name`: string *[Required]*
A unique id for this dialog

#### `data` : object *[Optional]*
A data object that will be passed to the modal as a property. Usefull to send data from the modal parent

## Modal Content Props
The content wrapped inside the modal receive the additional props :

#### `toggle`: function ()=>()
This will toggle the dialog. Can be used for buttons like Dismiss, Cancel, Close, ...


## Example

see the file :
https://github.com/anis-campos/redux-reactstrap-modal/blob/develop/examples/index.js

## Tests
Work in progress

## Change Log

#### **v2**
*What's new:*
- SSR is supported
- Latest version of react, redux and reactstrap ( may 2019 )

*Fixes*
- Fix [issue 5](https://github.com/anis-campos/redux-reactstrap-modal/issues/5) : Incompatible with SSR
- fixing travis CI
- migrating from Karma to Jest

#### **v1.1.3**
- Fix [issue 6](https://github.com/anis-campos/redux-reactstrap-modal/issues/6) : Incompatible with react-redux > 6
- need to pass `store` to create the redux wrapper

#### **v1.1.2**
- Fix [issue 4](https://github.com/anis-campos/redux-reactstrap-modal/issues/4) : Uncaught TypeError: state.merge is not a function


