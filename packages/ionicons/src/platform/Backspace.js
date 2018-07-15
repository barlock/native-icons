import { Platform } from 'react-native';
import IosBackspace from '../ios/Backspace';
import MdBackspace from '../md/Backspace';

export default Platform.OS === 'ios' ? IosBackspace : MdBackspace;