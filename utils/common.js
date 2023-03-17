export const setLocalStorageItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error storing ${key} in local storage: ${error}`);
  }
};

export const getLocalStorageItem = (key, defaultValue = null) => {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving ${key} from local storage: ${error}`);
    return defaultValue;
  }
};
