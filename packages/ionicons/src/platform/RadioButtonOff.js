import { Platform } from 'react-native';
import IosRadioButtonOff from '../ios/RadioButtonOff';
import MdRadioButtonOff from '../md/RadioButtonOff';

export default Platform.OS === 'ios' ? IosRadioButtonOff : MdRadioButtonOff;