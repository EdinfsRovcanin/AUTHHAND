import axios from "axios";
import { ImageSearchForm } from "../components/ImageSerachForm";
import { IGoogleResponse } from "../models/IGoogleResponse";
import { IImage } from "../models/IImage";
import { SearchResult } from "../components/SearchResults";
import { useState } from "react";

export const ImageSearchApp = () => {
  const [images, setImages] = useState<IImage[]>();
  const [searchTime, setSearchTime] = useState<number | null>(null);
  const [correctedQuery, setCorrectedQuery] = useState<string | null>(null);

  const searchImages = async (searchText: string) => {
    const response = await axios.get<IGoogleResponse>(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyCDIY1m40pDSiuHen79vBpkSVjqBywMfso&cx=c6dbe55590d894a1c&num=10&searchType=image&q=" +
        searchText
    );
    console.log(response)
    setImages(response.data.items);
    setSearchTime(response.data.searchInformation.searchTime);
    setCorrectedQuery(response.data.spelling?.correctedQuery || null);
    console.log(images);
  };
const handleSuggestedSearch = () => {
  if (correctedQuery) {
    searchImages(correctedQuery); // Sök igen med det föreslagna korrekta sökordet
  }
};

  return (
    <>
    <p></p>
      <ImageSearchForm search={searchImages} />
      {searchTime && <p>Sökningen tog: {searchTime} sekunder</p>}
      {correctedQuery && (
        <p>
          Menade du:{" "}
          <button className="stavning"
          
            onClick={handleSuggestedSearch}
          >
            {correctedQuery}
          </button>
          ?
        </p>
      )}
      <SearchResult images={images} />
    </>
  );
};
