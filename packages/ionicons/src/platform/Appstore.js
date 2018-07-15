import { Platform } from 'react-native';
import IosAppstore from '../ios/Appstore';
import MdAppstore from '../md/Appstore';

export default Platform.OS === 'ios' ? IosAppstore : MdAppstore;