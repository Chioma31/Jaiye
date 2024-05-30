import useLocalStorage from "./user-service";

const useStorageValues = ()=>{

    const  localStorage  = useLocalStorage();
  
    const getCurrentUser = () => {
      return localStorage.getItem("token");
    };
  
    
  
    const logout = () => {
      localStorage.clear();
    };
  
  
    const clearData = () => {
      localStorage.clear();
    };
  
    return {
        getCurrentUser,
        logout,
        clearData,
    }
}

export default useStorageValues