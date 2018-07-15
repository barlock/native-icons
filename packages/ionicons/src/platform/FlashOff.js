import { Platform } from 'react-native';
import IosFlashOff from '../ios/FlashOff';
import MdFlashOff from '../md/FlashOff';

export default Platform.OS === 'ios' ? IosFlashOff : MdFlashOff;