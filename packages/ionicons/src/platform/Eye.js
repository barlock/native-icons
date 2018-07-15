import { Platform } from 'react-native';
import IosEye from '../ios/Eye';
import MdEye from '../md/Eye';

export default Platform.OS === 'ios' ? IosEye : MdEye;