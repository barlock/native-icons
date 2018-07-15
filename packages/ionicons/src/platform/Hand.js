import { Platform } from 'react-native';
import IosHand from '../ios/Hand';
import MdHand from '../md/Hand';

export default Platform.OS === 'ios' ? IosHand : MdHand;