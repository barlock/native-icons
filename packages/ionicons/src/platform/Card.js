import { Platform } from 'react-native';
import IosCard from '../ios/Card';
import MdCard from '../md/Card';

export default Platform.OS === 'ios' ? IosCard : MdCard;