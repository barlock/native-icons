import { Platform } from 'react-native';
import IosWoman from '../ios/Woman';
import MdWoman from '../md/Woman';

export default Platform.OS === 'ios' ? IosWoman : MdWoman;