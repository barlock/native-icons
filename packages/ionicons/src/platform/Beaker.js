import { Platform } from 'react-native';
import IosBeaker from '../ios/Beaker';
import MdBeaker from '../md/Beaker';

export default Platform.OS === 'ios' ? IosBeaker : MdBeaker;