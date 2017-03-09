import * as React from 'react';
import {Provider, connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import configureStore from '../store/index';
import DevTools from './DevTools';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import {fetchingData} from '../actions/creators/global';
import ConnectedIntlProvider from './ConnectedIntlProvider';
import NotFound404 from '../components/util/NotFound404';
import TestContainer from './TestContainer';
import App from './App';
import * as Config from '../config/Config';

const store = configureStore();
const BASE_PATH = '/' + process.env.BASE_PATH;

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedIntlProvider>
                    <div>
                        <Router history={browserHistory}>
                            <Route path={BASE_PATH} component={App}>
                                <IndexRoute component={TestContainer} />
                                <Route path='/build/foo' component={TestContainer} />
                            </Route>
                        </Router>
                        <DevTools />
                    </div>
                </ConnectedIntlProvider>
            </Provider>
        );
    }
}
