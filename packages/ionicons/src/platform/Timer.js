import { Platform } from 'react-native';
import IosTimer from '../ios/Timer';
import MdTimer from '../md/Timer';

export default Platform.OS === 'ios' ? IosTimer : MdTimer;