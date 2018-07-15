import { Platform } from 'react-native';
import IosBrowsers from '../ios/Browsers';
import MdBrowsers from '../md/Browsers';

export default Platform.OS === 'ios' ? IosBrowsers : MdBrowsers;