import { Platform } from 'react-native';
import IosTv from '../ios/Tv';
import MdTv from '../md/Tv';

export default Platform.OS === 'ios' ? IosTv : MdTv;