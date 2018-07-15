import { Platform } from 'react-native';
import IosNuclear from '../ios/Nuclear';
import MdNuclear from '../md/Nuclear';

export default Platform.OS === 'ios' ? IosNuclear : MdNuclear;