import { useAuth0 } from "@auth0/auth0-react";
import { IImage } from "../models/IImage";


interface ISearchResultProps {
  images: IImage[] | undefined;
}


export const SearchResult = ({ images }: ISearchResultProps) => {
  const { user, isAuthenticated } = useAuth0();
  
  const addToFavorites = async (imageUrl: string) => {
    if (!isAuthenticated || !user) {
      console.log(
        "Användaren är inte inloggadeller användarinformation saknas."
      );
      return;
    }
    
    try {
      const response = await fetch("http://localhost:3000/add-favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user.sub, imageUrl }),
      });

      if (response.ok) {
        console.log("Bilden har lagts till i favoriter!");
      } else {
        console.log("Misslyckades med att lägga till bilden i favoriter.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="images">
      {images?.map((image) => (
        
        <div
          key={image.link}
          className="imgage-wrapper"
          style={{ cursor: "pointer" }}
        >
          <div className="img-container">
            <img src={image.link} alt={image.title} />
          </div>
          
          <button onClick={() => addToFavorites(image.link)}>
            Lägg till i favoriter
          </button>
        </div>
      ))}
    </section>
  );
};
