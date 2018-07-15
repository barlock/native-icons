import { Platform } from 'react-native';
import IosMicrophone from '../ios/Microphone';
import MdMicrophone from '../md/Microphone';

export default Platform.OS === 'ios' ? IosMicrophone : MdMicrophone;