import React, { Component } from 'react';
import Header from '../components/menu/Header';
import Message from '../components/messages/Message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLocale } from '../actions/creators/global';

/**
 * App class contains other container classes - i.e. components with access to store
 */
class App extends React.Component {
    render() {
        // this.props.children gets components that are set up in the router (inside Root component)
        var childrenWithProps = React.cloneElement(this.props.children, {messages:this.props.messages, actions: this.props.actions});

        return (
            <div className='main'>
                <Header locale={this.props.locale} setLocale={this.props.actions.setLocale}/>
                <Message messages={this.props.messages} />
                {childrenWithProps}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                setLocale: setLocale
            }, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        messages: state.app.globals.message,
        locale: {
            locales: state.app.globals.locale.locales,
            selected: state.app.globals.locale.selected
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);