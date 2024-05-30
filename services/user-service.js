
const useLocalStorage = () => {
  const localStorage = typeof window !== 'undefined' && window.localStorage;

  const getItem = (key) => {
    if (localStorage) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  };

  const setItem = (key, value) => {
    if (localStorage) {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const clear = () => {
    if (localStorage) {https
      return localStorage.clear();
    }
  };


  return {
    getItem,
    setItem,
    clear,
  };
};

export default useLocalStorage;
