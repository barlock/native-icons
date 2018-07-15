import { Platform } from 'react-native';
import IosCall from '../ios/Call';
import MdCall from '../md/Call';

export default Platform.OS === 'ios' ? IosCall : MdCall;