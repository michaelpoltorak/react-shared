import React from 'react';
import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';

export default class Menu extends React.Component {
    render() {
        return(
            <div className='menu'>
                <Link className='item' to='/players'><FormattedMessage id='menu.players'/></Link>
                <Link className='item' to='/matches'><FormattedMessage id='menu.matches'/></Link>
            </div>
        )
    }
}