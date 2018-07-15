import { Platform } from 'react-native';
import IosRibbon from '../ios/Ribbon';
import MdRibbon from '../md/Ribbon';

export default Platform.OS === 'ios' ? IosRibbon : MdRibbon;