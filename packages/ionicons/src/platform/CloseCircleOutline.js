import { Platform } from 'react-native';
import IosCloseCircleOutline from '../ios/CloseCircleOutline';
import MdCloseCircleOutline from '../md/CloseCircleOutline';

export default Platform.OS === 'ios' ? IosCloseCircleOutline : MdCloseCircleOutline;