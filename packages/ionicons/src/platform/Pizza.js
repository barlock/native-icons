import { Platform } from 'react-native';
import IosPizza from '../ios/Pizza';
import MdPizza from '../md/Pizza';

export default Platform.OS === 'ios' ? IosPizza : MdPizza;