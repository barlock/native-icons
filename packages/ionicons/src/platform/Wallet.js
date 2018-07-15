import { Platform } from 'react-native';
import IosWallet from '../ios/Wallet';
import MdWallet from '../md/Wallet';

export default Platform.OS === 'ios' ? IosWallet : MdWallet;