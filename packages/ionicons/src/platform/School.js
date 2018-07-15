import { Platform } from 'react-native';
import IosSchool from '../ios/School';
import MdSchool from '../md/School';

export default Platform.OS === 'ios' ? IosSchool : MdSchool;