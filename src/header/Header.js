import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
const Header = () => {
    const {logOut, user} = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/inventory">
          inventory
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          Home
        </Link>
        {user?.uid ? (
          <button
            className="btn btn-ghost normal-case text-xl"
            onClick={logOut}
          >
            log out
          </button>
        ) : (
          <>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">
              login
            </Link>

            <Link className="btn btn-ghost normal-case text-xl" to="/">
              register
            </Link>
          </>
        )}
        <span>{user?.email}</span>
      </div>
    </div>
  );
};

export default Header;
