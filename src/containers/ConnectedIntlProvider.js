import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import localeData from '../../data/translations.json';

// Returning a store-connected IntlProvider when locale changes in state
function mapStateToProps(state) {
  return {
        locale: state.app.globals.locale.selected,
        messages: localeData[state.app.globals.locale.selected],
    }
}

export default connect(mapStateToProps)(IntlProvider);