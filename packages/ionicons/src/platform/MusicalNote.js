import { Platform } from 'react-native';
import IosMusicalNote from '../ios/MusicalNote';
import MdMusicalNote from '../md/MusicalNote';

export default Platform.OS === 'ios' ? IosMusicalNote : MdMusicalNote;