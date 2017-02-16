import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';

class NotFound404 extends Component {
    render() {
        return (
            <div>
                <div className='logo'/>
                <div>
                    <h1><FormattedMessage id='global.not_found'/></h1>
                </div>
            </div>
        );
    }
}

export default NotFound404;