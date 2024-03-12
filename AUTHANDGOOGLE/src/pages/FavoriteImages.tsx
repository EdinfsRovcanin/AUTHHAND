import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface IImage {
  url: string; // Ändrat från imageUrl till url för att matcha serverns svar
  title?: string;
}

export const FavoriteImages = () => {
  const { user, isAuthenticated } = useAuth0();
  const [favoriteImages, setFavoriteImages] = useState<IImage[]>([]);

  useEffect(() => {
    const fetchFavoriteImages = async () => {
      if (!isAuthenticated || !user) {
        console.log("Användaren är inte inloggad.");
        return;
      }
      try {
        const response = await fetch(
          `http://localhost:3000/favorites?userId=${user.sub}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Anta att servern skickar en platt lista av bilder för den inloggade användaren
        setFavoriteImages(data);
      } catch (error) {
        console.error("Error fetching favorite images:", error);
      }
    };

    fetchFavoriteImages();
  }, [user, isAuthenticated]);

  return (
    <>
      <h2>Favoritbilder</h2>
      <section className="images">
        {favoriteImages.map((image, index) => (
          <div key={index} className="img-container">
            <img src={image.url} alt={image.title || "Favoritbild"} />
            <p>{image.title}</p>
          </div>
        ))}
      </section>
    </>
  );
};
