import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface IImageSearchFormProps {
  onSearch: (text: string) => void;
  searchText: string;
}
export const ImageSearchForm = ({
  onSearch,
  searchText,
}: IImageSearchFormProps) => {
  const [userSearchText, setUserSearchText] = useState(searchText);

useEffect(() => {
  setUserSearchText(searchText);
}, [searchText]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSearchText(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(userSearchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchField"
        value={userSearchText}
        onChange={handleChange}
      />
      <button type="submit">Sök</button>
    </form>
  );
};
