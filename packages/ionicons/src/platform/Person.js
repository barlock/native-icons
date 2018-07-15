import { Platform } from 'react-native';
import IosPerson from '../ios/Person';
import MdPerson from '../md/Person';

export default Platform.OS === 'ios' ? IosPerson : MdPerson;