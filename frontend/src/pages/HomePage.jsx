import React, { useEffect, useState } from "react";
import useUserStore from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getClasses, deleteClass } from "../services/classService";
import Body from "../components/Body";

function HomePage() {
  const user = useUserStore((state) => state.user);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setClasses([]);

    if (!user) {
      navigate("/login");
    } else {
      getClasses()
        .then((data) => {
          if (data && Array.isArray(data)) {
            setClasses(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching classes:", error);
        });
    }

    return () => {
      setClasses([]);
    };
  }, [user, navigate]);

  const handleLogout = () => {
    useUserStore.getState().clearUser();
    setClasses([]);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const addClass = () => {
    navigate("/add-class");
  };

  const handleDelete = (id) => {
    deleteClass(id)
      .then(() => {
        setClasses(classes.filter((c) => c.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting class:", error);
      });
  };

  return (
    <>
      <NavBar logout={handleLogout} addClass={addClass} />
      <Body classes={classes} onDelete={handleDelete} />
    </>
  );
}

export default HomePage;
