import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';


class Message extends Component {
    render() {
        var messages = this.props.messages;
        //console.log('this.props.messages ', this.props.messages);
        if (this.props.messages && this.props.messages.message != null) {
            return (
                <div className='messages'>
                    {messages.message.map(this.showMessage)}
                </div>
            );
        }
        return (<div></div>)
    }

    showMessage(message) {
        var messageId = 'messages.' + message.id;
        return (
            <div className='message' key={message.id}><FormattedMessage id={messageId}/></div>
        )
    }
}

export default Message;