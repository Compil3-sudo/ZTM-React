import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../components/context/user-context.component";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {
  const userCtx = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();

    userCtx.setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {userCtx.currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
