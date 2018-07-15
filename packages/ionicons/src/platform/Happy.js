import { Platform } from 'react-native';
import IosHappy from '../ios/Happy';
import MdHappy from '../md/Happy';

export default Platform.OS === 'ios' ? IosHappy : MdHappy;