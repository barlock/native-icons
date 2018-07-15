import { Platform } from 'react-native';
import IosPaper from '../ios/Paper';
import MdPaper from '../md/Paper';

export default Platform.OS === 'ios' ? IosPaper : MdPaper;