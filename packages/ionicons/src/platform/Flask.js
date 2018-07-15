import { Platform } from 'react-native';
import IosFlask from '../ios/Flask';
import MdFlask from '../md/Flask';

export default Platform.OS === 'ios' ? IosFlask : MdFlask;