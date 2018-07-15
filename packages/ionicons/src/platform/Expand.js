import { Platform } from 'react-native';
import IosExpand from '../ios/Expand';
import MdExpand from '../md/Expand';

export default Platform.OS === 'ios' ? IosExpand : MdExpand;