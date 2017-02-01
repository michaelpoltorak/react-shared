import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class TestContainer extends Component {
    render() {
        return (
            <div className='container'>
                <FormattedMessage id='hello.world'/>
            </div>
        );
    }
}

export default TestContainer;