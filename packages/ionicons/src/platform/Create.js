import { Platform } from 'react-native';
import IosCreate from '../ios/Create';
import MdCreate from '../md/Create';

export default Platform.OS === 'ios' ? IosCreate : MdCreate;