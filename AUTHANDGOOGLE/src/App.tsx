import { useAuth0 } from "@auth0/auth0-react";
import "./App.scss";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const search = async () => {
      const response = await fetch(
        "https://www.googleapis.com/customsearch/v1?key=AIzaSyCDIY1m40pDSiuHen79vBpkSVjqBywMfso&cx=c6dbe55590d894a1c&num=10&searchType=image&q=smurfs"
      );
      const data = await response.json();
      console.log(data);
    };
    search();
  }, []);

  const { isAuthenticated } = useAuth0();
  return <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>;
}

export default App;
