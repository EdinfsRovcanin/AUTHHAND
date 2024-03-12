import { NavLink } from "react-router-dom"
import LoginButton from "./LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import huvudBild from "./../assets/img/huvudbild2 .webp"



export const Navigation = () => {
    const { isAuthenticated } = useAuth0();
    return (
      <>
        <div className="menuContainer">
          <nav>
            <ul>
              {isAuthenticated && (
                <>
                  <li>
                    <NavLink to={"/images"}>Images</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/favoriter"}>Favorites</NavLink>
                  </li>
                  <li>
                    <LogoutButton />
                  </li>
                </>
              )}

              {!isAuthenticated && (
                <li>
                  <LoginButton />
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="huvudBild">
          <img src={huvudBild} alt="" />
        </div>
      </>
    );
}