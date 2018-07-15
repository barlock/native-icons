import { Platform } from 'react-native';
import IosLogIn from '../ios/LogIn';
import MdLogIn from '../md/LogIn';

export default Platform.OS === 'ios' ? IosLogIn : MdLogIn;