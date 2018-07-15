import { Platform } from 'react-native';
import IosLock from '../ios/Lock';
import MdLock from '../md/Lock';

export default Platform.OS === 'ios' ? IosLock : MdLock;