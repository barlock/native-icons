import { Platform } from 'react-native';
import IosFlash from '../ios/Flash';
import MdFlash from '../md/Flash';

export default Platform.OS === 'ios' ? IosFlash : MdFlash;