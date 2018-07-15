import { Platform } from 'react-native';
import IosInformation from '../ios/Information';
import MdInformation from '../md/Information';

export default Platform.OS === 'ios' ? IosInformation : MdInformation;