import { Platform } from 'react-native';
import IosJournal from '../ios/Journal';
import MdJournal from '../md/Journal';

export default Platform.OS === 'ios' ? IosJournal : MdJournal;