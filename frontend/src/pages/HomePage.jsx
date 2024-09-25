import React, { useEffect } from "react";
import useUserStore from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function HomePage() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <NavBar />
    </>
  );
}

export default HomePage;
