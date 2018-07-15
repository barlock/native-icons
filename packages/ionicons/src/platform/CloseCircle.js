import { Platform } from 'react-native';
import IosCloseCircle from '../ios/CloseCircle';
import MdCloseCircle from '../md/CloseCircle';

export default Platform.OS === 'ios' ? IosCloseCircle : MdCloseCircle;