import * as SecureStore from 'expo-secure-store';

export const TOKEN = 'token';
export const SECRET = 'secret';

export function setStore(key, value) {
	SecureStore.setItemAsync(key, value);
}

export async function getStore(key) {
    const result = await SecureStore.getItemAsync(key);
	return result;
}

export function deleteStore(key) {
	SecureStore.deleteItemAsync(key);
}