import axios from "axios";
import { IGoogleResponse } from "../models/IGoogleResponse";
import { IImage } from "../models/IImage";
import { SearchResult } from "../components/SearchResults";
import { useState } from "react";
import { ImageSearchForm } from "../components/ImageSerachForm";

export const ImageSearchApp = () => {
  const [userSearchText, setUserSearchText] = useState("");
  const [images, setImages] = useState<IImage[]>();
  const [searchTime, setSearchTime] = useState<number | null>(null);
  const [correctedQuery, setCorrectedQuery] = useState<string | null>(null);

  const searchImages = async (searchText: string) => {
    setUserSearchText(searchText);
    const response = await axios.get<IGoogleResponse>(
      `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=c6dbe55590d894a1c&num=10&searchType=image&q=` +
        searchText
    );
    console.log(response)
    setImages(response.data.items);
    setSearchTime(response.data.searchInformation.searchTime);
    setCorrectedQuery(response.data.spelling?.correctedQuery || null);
    console.log(images);
  };
const handleSuggestedSearch = correctedQuery
  ? () => searchImages(correctedQuery)
  : () => {};


  return (
    <>
      <ImageSearchForm onSearch={searchImages} searchText={userSearchText} />
      {searchTime && <p>Sökningen tog: {searchTime} sekunder</p>}
      {correctedQuery && (
        <p>
          Menade du:{" "}
          <span
            onClick={handleSuggestedSearch}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {correctedQuery}
          </span>
          ?
        </p>
      )}
      <SearchResult images={images} />
    </>
  );
};
