import { Platform } from 'react-native';
import IosTrophy from '../ios/Trophy';
import MdTrophy from '../md/Trophy';

export default Platform.OS === 'ios' ? IosTrophy : MdTrophy;