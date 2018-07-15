import { Platform } from 'react-native';
import IosMegaphone from '../ios/Megaphone';
import MdMegaphone from '../md/Megaphone';

export default Platform.OS === 'ios' ? IosMegaphone : MdMegaphone;