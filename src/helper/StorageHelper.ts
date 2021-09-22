import AsyncStorage from '@react-native-community/async-storage';

export default class StorageHelper {
  static async getItem(key) {
    return AsyncStorage.getItem(key);
  }

  static async setItem(key, value) {
    return AsyncStorage.setItem(key, value);
  }

  static async deleteItem(key) {
    return AsyncStorage.removeItem(key);
  }
}
