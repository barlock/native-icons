import { Platform } from 'react-native';
import IosCheckboxOutline from '../ios/CheckboxOutline';
import MdCheckboxOutline from '../md/CheckboxOutline';

export default Platform.OS === 'ios' ? IosCheckboxOutline : MdCheckboxOutline;