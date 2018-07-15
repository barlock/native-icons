import { Platform } from 'react-native';
import IosFunnel from '../ios/Funnel';
import MdFunnel from '../md/Funnel';

export default Platform.OS === 'ios' ? IosFunnel : MdFunnel;