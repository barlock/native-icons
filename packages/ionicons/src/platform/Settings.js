import { Platform } from 'react-native';
import IosSettings from '../ios/Settings';
import MdSettings from '../md/Settings';

export default Platform.OS === 'ios' ? IosSettings : MdSettings;