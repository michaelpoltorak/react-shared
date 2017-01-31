import * as React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import '../less/main.less'; // Importing stylesheets for entire app

render(
    <Root />, document.getElementById('root')
)