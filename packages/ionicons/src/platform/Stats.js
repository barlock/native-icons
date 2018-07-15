import { Platform } from 'react-native';
import IosStats from '../ios/Stats';
import MdStats from '../md/Stats';

export default Platform.OS === 'ios' ? IosStats : MdStats;