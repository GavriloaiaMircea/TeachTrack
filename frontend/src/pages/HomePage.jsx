import React, { useEffect } from "react";
import useUserStore from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    useUserStore.getState().clearUser();
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <h1>HomePage</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default HomePage;
