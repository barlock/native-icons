import { Platform } from 'react-native';
import IosMore from '../ios/More';
import MdMore from '../md/More';

export default Platform.OS === 'ios' ? IosMore : MdMore;