import { Platform } from 'react-native';
import IosInformationCircle from '../ios/InformationCircle';
import MdInformationCircle from '../md/InformationCircle';

export default Platform.OS === 'ios' ? IosInformationCircle : MdInformationCircle;