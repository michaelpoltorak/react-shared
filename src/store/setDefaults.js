import { setDefaultValues } from '../actions/creators/global';
import { addLocaleData } from 'react-intl';
import project from '../../config/project';
import localeData from '../../data/translations.json';
import da from 'react-intl/locale-data/da';

export function setDefaults(store) {

    const defaultData = {
        locales: project.locale.locales,
        selected: project.locale.default,
        project: project
    }

    // Setting up lang framework   
    addLocaleData([...da]);                                         
    
    //Dispatch default project values to store
    store.dispatch(setDefaultValues(defaultData));                    
}