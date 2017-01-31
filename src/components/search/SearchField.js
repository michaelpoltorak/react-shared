import React, {
    Component
}
from 'react';
import {POLLING_INTERVAL} from '../../constants/Config';
import RaisedButton from 'material-ui/lib/raised-button';
//import {connect} from 'react-redux';
//import './Search.css';
var storedQuery = 'peter';
    
export default class SearchField extends React.Component {
    render() {
        //console.log("searchfield props ", this.props);
        return (
            <div>
                <RaisedButton label="Is this serif?"/>
                <input className='searchField' onChange={(e) => this.query(e)} type='text' ref='input' />
            </div>
        );
    }
    query(e) {
        var delayTimer, _this = this;
        const {
            dispatch
        } = this.props
        const node = this.refs.input
        const text = node.value.trim()
        console.info("text ", text);
        if (text !== '') {
            clearTimeout(delayTimer);
            delayTimer = setTimeout(function() {
                //dispatch(searchFoos(text));
                _this.doSearch(text);
            }, 200);
         }
    }
    doSearch(query) {
        //this.props.searchFoos(query);
        storedQuery = query;
    }
    componentWillMount() {
        console.log("mount");
        this.setRefreshInterval();
    }
    
    componentWillReceiveProps() {
        console.log("receive props");
    }

    componentWillUnmount() {
        console.log("un-mount");
        clearInterval(this._refreshInterval);
    }
    setRefreshInterval() {
        this.clearRefreshInterval();
        this._refreshInterval = setInterval(::this.refresh, POLLING_INTERVAL);
        this.refresh();
    }

    clearRefreshInterval() {
        clearInterval(this._refreshInterval);
    }

    refresh() {
        //this.props.dispatch(loadSemaphores());
        this.doSearch(storedQuery);
    }


}

/*SearchField.propTypes = {
    //onSendQuery: PropTypes.func.isRequired
}*/
// Wrap the component to inject dispatch and state into it
//export default connect()(SearchField);
