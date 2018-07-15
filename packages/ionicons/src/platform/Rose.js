import { Platform } from 'react-native';
import IosRose from '../ios/Rose';
import MdRose from '../md/Rose';

export default Platform.OS === 'ios' ? IosRose : MdRose;