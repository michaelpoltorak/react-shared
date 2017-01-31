import * as types from '../types/global';

// Set some default values
export function setDefaultValues(values) {
    return {
        type: types.SET_DEFAULT_VALUES,
        values
    }
}

// Set locales
export function setLocale(locale) {
    return {
        type: types.SET_LOCALE,
        locale:locale
    }
}

// Is data being fetched
export function fetchingData(isFetching) {
    return {
        type: types.FETCHING_DATA,
        isFetching: isFetching
    }
}
