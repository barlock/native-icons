import { Platform } from 'react-native';
import IosPie from '../ios/Pie';
import MdPie from '../md/Pie';

export default Platform.OS === 'ios' ? IosPie : MdPie;