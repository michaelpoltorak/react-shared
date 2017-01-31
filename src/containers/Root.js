import * as React from 'react';
import {Provider, connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import configureStore from '../store/index';
import DevTools from './DevTools';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import {fetchingData} from '../actions/creators/global';
import ConnectedIntlProvider from './ConnectedIntlProvider';
import TestContainer from './TestContainer';
import App from './App';
import * as Config from '../config/Config';

console.log('Config ', Config);

const store = configureStore();
const BASEPATH = '/' + Config.BASEPATH;
console.log('BASEPATH ', BASEPATH);

export default class Root extends React.Component {
    constructor(props) {
        super(props);
        
        //addLocaleData([...da]); // Setting up lang framework
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedIntlProvider>
                    <div>
                        <Router history={browserHistory}>
                            <Route path={BASEPATH} component={App}>
                                <IndexRoute component={TestContainer} />
                            </Route>
                        </Router>
                        <DevTools />
                    </div>
                </ConnectedIntlProvider>
            </Provider>
        );
    }
}
