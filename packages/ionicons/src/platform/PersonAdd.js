import { Platform } from 'react-native';
import IosPersonAdd from '../ios/PersonAdd';
import MdPersonAdd from '../md/PersonAdd';

export default Platform.OS === 'ios' ? IosPersonAdd : MdPersonAdd;