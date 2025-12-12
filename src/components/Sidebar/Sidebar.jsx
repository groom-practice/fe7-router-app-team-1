import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Link to="/">HOME</Link>
      <Link to="/posts">POSTS</Link>
      <button className="sidebar-back-btn" type="button" onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
};

export default Sidebar;
