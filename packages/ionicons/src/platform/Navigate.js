import { Platform } from 'react-native';
import IosNavigate from '../ios/Navigate';
import MdNavigate from '../md/Navigate';

export default Platform.OS === 'ios' ? IosNavigate : MdNavigate;