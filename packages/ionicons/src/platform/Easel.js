import { Platform } from 'react-native';
import IosEasel from '../ios/Easel';
import MdEasel from '../md/Easel';

export default Platform.OS === 'ios' ? IosEasel : MdEasel;