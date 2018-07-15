import { Platform } from 'react-native';
import IosContract from '../ios/Contract';
import MdContract from '../md/Contract';

export default Platform.OS === 'ios' ? IosContract : MdContract;