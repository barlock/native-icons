import { Platform } from 'react-native';
import IosUndo from '../ios/Undo';
import MdUndo from '../md/Undo';

export default Platform.OS === 'ios' ? IosUndo : MdUndo;