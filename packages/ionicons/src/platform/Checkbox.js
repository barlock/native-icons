import { Platform } from 'react-native';
import IosCheckbox from '../ios/Checkbox';
import MdCheckbox from '../md/Checkbox';

export default Platform.OS === 'ios' ? IosCheckbox : MdCheckbox;