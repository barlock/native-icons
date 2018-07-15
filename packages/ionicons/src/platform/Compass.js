import { Platform } from 'react-native';
import IosCompass from '../ios/Compass';
import MdCompass from '../md/Compass';

export default Platform.OS === 'ios' ? IosCompass : MdCompass;