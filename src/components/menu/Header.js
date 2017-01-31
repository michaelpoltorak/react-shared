import React, { Component } from 'react';
import {Link} from 'react-router';
import LocaleSelector from '../util/LocaleSelector';
import * as Config from '../../config/Config';

class Header extends Component {

    render() {
        const logo_src = Config.BASEURL + '/images/wii-logo.png';
        return (
            <div className='header'>
                <Link to='/'>
                    <div className='logo'><img src={logo_src}/></div>
                    <div className='title'>{Config.APP_TITLE}</div>

                </Link>
                <LocaleSelector setLocale={this.props.setLocale} locale={this.props.locale}/>
            </div>
        );
    }
}

export default Header;