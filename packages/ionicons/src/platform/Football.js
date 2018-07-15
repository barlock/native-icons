import { Platform } from 'react-native';
import IosFootball from '../ios/Football';
import MdFootball from '../md/Football';

export default Platform.OS === 'ios' ? IosFootball : MdFootball;