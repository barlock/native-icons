import { Platform } from 'react-native';
import IosAlert from '../ios/Alert';
import MdAlert from '../md/Alert';

export default Platform.OS === 'ios' ? IosAlert : MdAlert;