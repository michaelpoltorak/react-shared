import moment from 'moment';

export function getPrettyDate(unixTs, locale) {
    var date = new Date(unixTs);
    moment.locale(locale); 
    return moment(new Date()).format("DD. MMM YYYY");
}
