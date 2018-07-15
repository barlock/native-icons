import { Platform } from 'react-native';
import IosInformationCircleOutline from '../ios/InformationCircleOutline';
import MdInformationCircleOutline from '../md/InformationCircleOutline';

export default Platform.OS === 'ios' ? IosInformationCircleOutline : MdInformationCircleOutline;