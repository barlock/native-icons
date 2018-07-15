import { Platform } from 'react-native';
import IosRadio from '../ios/Radio';
import MdRadio from '../md/Radio';

export default Platform.OS === 'ios' ? IosRadio : MdRadio;