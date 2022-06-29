import storage from "../utils/storage";

export const useAuth = () => {
  const loadUser = () => {
    return storage.getToken();
  };

  const getUser = () => {
    if (loadUser()) {
      return true;
    } else {
      return false;
    }
  };

  const handleUserResponse = async (data) => {
    // const { jwt, user } = data;
    storage.setToken(data);
    return data;
  };

  const loginUser = async (data) => {
    try {
      storage.setToken(data);
      return true;
    } catch {
      return false;
    }
  };

  //   const registerUser = async (data) => {
  //     console.log(data);
  //     try {
  //       const response = await registerWithEmailAndPassword(data);
  //       const user = await handleUserResponse(response);
  //       return true;
  //     } catch {
  //       console.log("in catch");
  //       logNotification("add", {
  //         type: "warning",
  //         message: "",
  //       });
  //       return false;
  //     }
  //   };

  const logoutUser = () => {
    if (storage.clearToken()) {
      return true;
    } else {
      return false;
    }
  };

  return {
    getUser,
    loadUser,
    loginUser,
    logoutUser,
    // registerUser,
    handleUserResponse,
  };
};
