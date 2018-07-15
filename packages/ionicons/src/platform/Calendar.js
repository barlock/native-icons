import { Platform } from 'react-native';
import IosCalendar from '../ios/Calendar';
import MdCalendar from '../md/Calendar';

export default Platform.OS === 'ios' ? IosCalendar : MdCalendar;