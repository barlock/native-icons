import { Platform } from 'react-native';
import IosDoneAll from '../ios/DoneAll';
import MdDoneAll from '../md/DoneAll';

export default Platform.OS === 'ios' ? IosDoneAll : MdDoneAll;