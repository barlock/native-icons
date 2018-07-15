import { Platform } from 'react-native';
import IosBrush from '../ios/Brush';
import MdBrush from '../md/Brush';

export default Platform.OS === 'ios' ? IosBrush : MdBrush;