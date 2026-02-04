import { useUserContext } from "../Context/UserContext";
import "../index.css";

function LogoutBtn() {
  const { currentUser, handleUpdateUser } = useUserContext();

  const handleLogout = () => {
    handleUpdateUser(null);
  };

  if (!currentUser || !currentUser.name) {
    return null;
  } 

  return (
    <div className="positioning">
      <span className="username-welcome"> Welcome, {currentUser.name}</span>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export { LogoutBtn };
