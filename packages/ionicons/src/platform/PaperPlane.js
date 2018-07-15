import { Platform } from 'react-native';
import IosPaperPlane from '../ios/PaperPlane';
import MdPaperPlane from '../md/PaperPlane';

export default Platform.OS === 'ios' ? IosPaperPlane : MdPaperPlane;