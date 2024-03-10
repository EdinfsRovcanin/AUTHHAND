import { useSearchParams } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export const ImageDetails = () => {
  const [searchParams] = useSearchParams();
  const imageUrl = searchParams.get("id");
  console.log(imageUrl);

  // Kontrollera om imageUrl är null direkt och returnera ett alternativt innehåll eller hantera felet
  if (!imageUrl) {
    return <div>Bilden kunde inte hittas.</div>;
  }

  // Om vi har en giltig imageUrl, dekodar vi den och visar bilden
  const decodedImageUrl = decodeURIComponent(imageUrl);

  return (
    <>
      <LogoutButton />
      <h2>Image Details</h2>

      <img src={decodedImageUrl} alt="Detaljerad bild" />
    </>
  );
};
