import { Platform } from 'react-native';
import IosColorFill from '../ios/ColorFill';
import MdColorFill from '../md/ColorFill';

export default Platform.OS === 'ios' ? IosColorFill : MdColorFill;