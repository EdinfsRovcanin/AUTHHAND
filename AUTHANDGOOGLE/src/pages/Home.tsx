import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import FavoriteImageForm from "../FavoriteImageForm";

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  return <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>;
  
}
