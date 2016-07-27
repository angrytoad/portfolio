import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * Thunk allows for asynchronous communication inside your actions and allows the dispatching of
 * multiple events inside one action, this is included by default as Hotsnapper moves
 * towards the use of RESTful services.
 */
import thunkMiddleware from 'redux-thunk';

/**
 * When adding new reducers, please add them into the rootReducers file,
 * as this is only used here as part of the redux createStore()
 * method.
 */
import reducers from "./rootReducer"

/**
 * When adding new routes, please add them via the routes.js file in the this directory.
 */
import routes from "./routes";


/**
 * We want to create a single redux store from our reducers & also hook up redux thunk for when
 * we want to create asynchronous actions.
 */
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

/**
 * Pass a history to the router along with the redux store to enable seamless traversal across
 * pages with redux.
 */
const history = syncHistoryWithStore(browserHistory, store);


function run () {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>,document.getElementById('root'));
}

run();
store.subscribe(run);