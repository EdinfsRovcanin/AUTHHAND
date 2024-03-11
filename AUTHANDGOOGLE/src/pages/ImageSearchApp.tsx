import axios from "axios";
import { ImageSearchForm } from "../components/ImageSerachForm";
import { IGoogleResponse } from "../models/IGoogleResponse";
import { IImage } from "../models/IImage";
import { SearchResult } from "../components/SearchResults";
import LogoutButton from "../components/LogoutButton";
import FavoriteImageForm from "../FavoriteImageForm";

export const ImageSearchApp = () => {
  const [images, setImages] = useState<IImage[]>();
  const searchImages = async (searchText: string) => {
    const response = await axios.get<IGoogleResponse>(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCDIY1m40pDSiuHen79vBpkSVjqBywMfso&cx=c6dbe55590d894a1c&num=10&searchType=image&q=" +
        searchText
    );
    setImages(response.data.items);
    console.log(images);
  };

  // useEffect(() => {
  //   const search = async () => {
  //     const response = await fetch(
  //       "https://www.googleapis.com/customsearch/v1?key=AIzaSyCDIY1m40pDSiuHen79vBpkSVjqBywMfso&cx=c6dbe55590d894a1c&num=10&searchType=image&q=smurfs"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   search();
  // }, []);
  return (
    <>
      <LogoutButton />
      <ImageSearchForm search={searchImages} />

      <SearchResult images={images} />
      <FavoriteImageForm />
    </>
  );
};
