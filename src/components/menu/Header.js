import React, { Component } from 'react';
import {Link} from 'react-router';
import LocaleSelector from '../util/LocaleSelector';
import {APP_TITLE, IMAGES_PATH} from '../../config/Config';

class Header extends Component {

    render() {
        const logo_src = IMAGES_PATH + '/logo.png';
        return (
            <div className='header'>
                <Link to='/'>
                    <div className='logo'><img src={logo_src}/></div>
                    <div className='title'>{APP_TITLE}</div>

                </Link>
                <LocaleSelector setLocale={this.props.setLocale} locale={this.props.locale}/>
            </div>
        );
    }
}

export default Header;