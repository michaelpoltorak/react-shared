import { FETCHING_DATA } from '../actions/types/global';
import { NAVIGATION_DATA_LOAD } from '../actions/types/global';
import { SET_DEFAULT_VALUES, SET_LOCALE, SEND_MESSAGE } from '../actions/types/global';

// Sets default values on app load
export function setValues(state = {}, action) {
    switch (action.type) {
        // Setting default values
        case SET_DEFAULT_VALUES:
            return Object.assign({}, state, {
                project: action.values.user
            });
        default:
            return state
    }
}

export function setLocale(state = {}, action) {
    switch (action.type) {
        // Set or update locale
        case SET_LOCALE:
            return Object.assign({}, state, {
                selected: action.locale,
                locales: state.locales
            });
        // Setting default locales
        case SET_DEFAULT_VALUES:
            return Object.assign({}, state, {
                locales: action.values.locales,
                selected: action.values.selected
            });
        default:
            return state
    }
}

// Is data being fetched?
export function fetchingData(state = { isFetching: false }, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        default:
            return state
    }
}

// For sending app-wide messages
export function sendMessage(state = {}, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return Object.assign({}, state, {
                message: [{
                    id: action.id,
                    data: action.id
                }]
            });
        default:
            return state;
    }
}

export default function globals(
    state = {}, action) {
    return {
        data: fetchingData(state.data, action),
        message: sendMessage(state.message, action),
        project: setValues(state.project, action),
        locale: setLocale(state.locale, action)
    }
};