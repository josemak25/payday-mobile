import AsyncStorage from '@react-native-community/async-storage';
import { USER_CREDITS } from '../../constants';

export default function Storage() {
  const getCredits = async () => {
    return AsyncStorage.getItem(USER_CREDITS);
  };

  const setCredits = async (credit: any) => {
    return AsyncStorage.setItem(USER_CREDITS, JSON.stringify({ ...credit }));
  };

  return {
    getCredits,
    setCredits
  };
}
