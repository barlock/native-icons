import { Platform } from 'react-native';
import IosOpen from '../ios/Open';
import MdOpen from '../md/Open';

export default Platform.OS === 'ios' ? IosOpen : MdOpen;