import { Platform } from 'react-native';
import IosMusicalNotes from '../ios/MusicalNotes';
import MdMusicalNotes from '../md/MusicalNotes';

export default Platform.OS === 'ios' ? IosMusicalNotes : MdMusicalNotes;