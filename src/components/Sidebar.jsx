import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Link className="link-reset" to="/">HOME</Link>
      <Link className="link-reset" to="/posts">POSTS</Link>
      <Link className="link-reset" to="/Favorites">FAVORITES</Link>
      <button className="sidebar-back-btn" type="button" onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
};

export default Sidebar;