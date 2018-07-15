import { Platform } from 'react-native';
import IosJet from '../ios/Jet';
import MdJet from '../md/Jet';

export default Platform.OS === 'ios' ? IosJet : MdJet;