import { Platform } from 'react-native';
import IosApps from '../ios/Apps';
import MdApps from '../md/Apps';

export default Platform.OS === 'ios' ? IosApps : MdApps;