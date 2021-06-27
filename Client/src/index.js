import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from "redux"
import rootReducer from './Store/Reducer/rootReducer';
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {reduxFirestore, getFirestore} from "redux-firestore"
import {reactReduxFirebase, getFirebase} from "react-redux-firebase"
import fbConfig from "../src/Store/config/fbConfig"
import firebase from "firebase/app";


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),

    reduxFirestore(firebase,fbConfig) 
  )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));