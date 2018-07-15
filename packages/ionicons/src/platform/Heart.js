import { Platform } from 'react-native';
import IosHeart from '../ios/Heart';
import MdHeart from '../md/Heart';

export default Platform.OS === 'ios' ? IosHeart : MdHeart;