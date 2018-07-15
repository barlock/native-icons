import { Platform } from 'react-native';
import IosSwitch from '../ios/Switch';
import MdSwitch from '../md/Switch';

export default Platform.OS === 'ios' ? IosSwitch : MdSwitch;