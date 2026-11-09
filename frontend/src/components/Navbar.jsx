import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  console.log("FULL USER OBJECT:", user);
  console.log("USER ROLE:", user?.role);
  console.log("ROLE TYPE:", typeof user?.role);
  console.log("IS ADMIN:", user?.isAdmin);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  // Handle different role formats
  const role =
    typeof user?.role === "string"
      ? user.role.toLowerCase()
      : user?.role?.role?.toLowerCase() || "";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            style={{ width: "36px ", height: "36px" }}
            src="/ShopNestLogo.png"
            alt="logo"
            className="navbar-logo"
          />
          ShopNest
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile">Hi {user.name}</Link>
            </li>
            {role === "admin" && (
              <>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              </>
            )}
            <li>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
