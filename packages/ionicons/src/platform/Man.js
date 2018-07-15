import { Platform } from 'react-native';
import IosMan from '../ios/Man';
import MdMan from '../md/Man';

export default Platform.OS === 'ios' ? IosMan : MdMan;