import { Platform } from 'react-native';
import IosRadioButtonOn from '../ios/RadioButtonOn';
import MdRadioButtonOn from '../md/RadioButtonOn';

export default Platform.OS === 'ios' ? IosRadioButtonOn : MdRadioButtonOn;