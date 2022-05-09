const { useContext } = require("react");
const { AuthContext } = require("../contexts/authContext");

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No se puede acceder al contexto de autorización");
  }
  return context;
};

export { useAuthContext };
