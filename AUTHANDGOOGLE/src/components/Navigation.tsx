import { NavLink } from "react-router-dom"
import LoginButton from "./LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";



export const Navigation = () => {
    const { isAuthenticated } = useAuth0();
    return (
      <nav>
        <ul>
          {isAuthenticated && (
            <>
              <li>
                <NavLink to={"/images"}>Images</NavLink>
              </li>
              <li>
                <NavLink to={"/favoriter"}>Favoritbilder</NavLink>
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
    );
}