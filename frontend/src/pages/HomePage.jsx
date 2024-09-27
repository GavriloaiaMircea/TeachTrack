import React, { useEffect, useState } from "react";
import useUserStore from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
  getClasses,
  deleteClass,
  searchClasses,
} from "../services/classService";
import Body from "../components/Body";

function HomePage() {
  const user = useUserStore((state) => state.user);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      loadClasses();
    }
  }, [user, navigate]);

  const loadClasses = () => {
    getClasses()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setClasses(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  };

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

  const handleUpdate = (id) => {
    navigate(`/update-class/${id}`);
  };

  const handleView = (id) => {
    navigate(`/class/${id}`);
  };

  const handleSearch = (searchTerm) => {
    searchClasses(searchTerm)
      .then((data) => {
        if (data && Array.isArray(data)) {
          setClasses(data);
        }
      })
      .catch((error) => {
        console.error("Error searching classes:", error);
      });
  };

  return (
    <>
      {user && (
        <>
          <NavBar
            logout={handleLogout}
            addClass={addClass}
            onSearch={handleSearch}
          />
          <Body
            classes={classes}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onView={handleView}
          />
        </>
      )}
    </>
  );
}

export default HomePage;
