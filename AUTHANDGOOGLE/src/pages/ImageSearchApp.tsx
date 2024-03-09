
import axios from "axios";
import { ImageSearchForm } from "../components/ImageSerachForm";
import { useEffect } from "react";

export const ImageSearchApp = () => {
//  const [images, setImages] = useState<IImage[]>()

//  const searchImages = async () => {
//   const response = await axios.get(
//     "https://www.googleapis.com/customsearch/v1?key=AIzaSyCDIY1m40pDSiuHen79vBpkSVjqBywMfso&cx=c6dbe55590d894a1c&num=10&searchType=image&q=smurfs");
//     setImages(response.data.Search)
//  }
  
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
  return (
    <>
      <ImageSearchForm />

      <section>Sökresultat</section>
    </>
  );
};
