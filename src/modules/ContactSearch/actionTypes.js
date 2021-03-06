import Enum from '../../lib/Enum';
import moduleActionTypes from '../../enums/moduleActionTypes';

export default new Enum([
  ...Object.keys(moduleActionTypes),
  'prepareSearch',
  'search',
  'searchSuccess',
  'searchError',
  'cleanUp',
  'save',
  'updateSearchCriteria',
  'restSearchCriteria',
], 'contactSearchActionTypes');
