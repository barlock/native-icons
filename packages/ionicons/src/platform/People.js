import { Platform } from 'react-native';
import IosPeople from '../ios/People';
import MdPeople from '../md/People';

export default Platform.OS === 'ios' ? IosPeople : MdPeople;