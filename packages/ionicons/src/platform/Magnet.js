import { Platform } from 'react-native';
import IosMagnet from '../ios/Magnet';
import MdMagnet from '../md/Magnet';

export default Platform.OS === 'ios' ? IosMagnet : MdMagnet;