import { Platform } from 'react-native';
import IosHourglass from '../ios/Hourglass';
import MdHourglass from '../md/Hourglass';

export default Platform.OS === 'ios' ? IosHourglass : MdHourglass;