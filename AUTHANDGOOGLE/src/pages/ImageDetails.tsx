import { useSearchParams } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export const ImageDetails = () => {
  const [searchParams] = useSearchParams();
  const imageUrl = searchParams.get("id");
  console.log(imageUrl);

 
  if (!imageUrl) {
    return <div>Bilden kunde inte hittas.</div>;
  }

 
  const decodedImageUrl = decodeURIComponent(imageUrl);

  return (
    <>
      <LogoutButton />
      <h2>Image Details</h2>

      <img src={decodedImageUrl} alt="Detaljerad bild" />
    </>
  );
};
