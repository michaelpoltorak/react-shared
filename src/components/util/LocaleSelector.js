import React, {Component} from 'react';

export default class LocaleSelector extends React.Component {
    render() {
        const selectedLocale = this.props.locale.selected;
        const locales = this.props.locale.locales;
        
        return (
            <div className='selectLang'>
                {locales.map((locale) =>  {
                    //console.log(locale, selectedLocale);
                    if(locale != selectedLocale) {
                        return (<a key={locale} href='#' onClick={(e) => this.setLocale(e, locale)}>{locale}</a>)
                    }else {
                        return (<div key={locale}>{locale}</div>)
                    }
                })}
            </div>
        )
    }

    setLocale(e, locale) {
        this.props.setLocale(locale);
        e.preventDefault();
        return false;
    }
}