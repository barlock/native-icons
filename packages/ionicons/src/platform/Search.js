import { Platform } from 'react-native';
import IosSearch from '../ios/Search';
import MdSearch from '../md/Search';

export default Platform.OS === 'ios' ? IosSearch : MdSearch;