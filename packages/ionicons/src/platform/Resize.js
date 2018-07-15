import { Platform } from 'react-native';
import IosResize from '../ios/Resize';
import MdResize from '../md/Resize';

export default Platform.OS === 'ios' ? IosResize : MdResize;