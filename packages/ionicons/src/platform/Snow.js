import { Platform } from 'react-native';
import IosSnow from '../ios/Snow';
import MdSnow from '../md/Snow';

export default Platform.OS === 'ios' ? IosSnow : MdSnow;