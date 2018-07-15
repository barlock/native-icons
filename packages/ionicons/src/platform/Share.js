import { Platform } from 'react-native';
import IosShare from '../ios/Share';
import MdShare from '../md/Share';

export default Platform.OS === 'ios' ? IosShare : MdShare;