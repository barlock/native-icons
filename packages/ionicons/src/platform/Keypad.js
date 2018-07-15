import { Platform } from 'react-native';
import IosKeypad from '../ios/Keypad';
import MdKeypad from '../md/Keypad';

export default Platform.OS === 'ios' ? IosKeypad : MdKeypad;