import { Platform } from 'react-native';
import IosFilm from '../ios/Film';
import MdFilm from '../md/Film';

export default Platform.OS === 'ios' ? IosFilm : MdFilm;