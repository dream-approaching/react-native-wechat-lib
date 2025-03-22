//@flow
import React from 'react';

//libs

// import store from './store'
import MainComponent from './main';

import { Provider } from 'react-redux'
// import configureStore from './store/configureStore';

import store from './store/index'
import Demo from './demo'



export default function AppStart() {


    return (
        // <Demo></Demo>
        <Provider store={store}>
            <MainComponent></MainComponent>
        </Provider>
    );
}
