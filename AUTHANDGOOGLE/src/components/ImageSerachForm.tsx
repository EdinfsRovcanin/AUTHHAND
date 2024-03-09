import { useState, ChangeEvent, FormEvent } from "react";

export const ImageSearchForm = () => {
    const [userSearchText, setUserSearchText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setUserSearchText(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
}

return <form onSubmit={handleSubmit}>
        <input
          value={userSearchText} onChange={handleChange} />
        <button>Sök</button>
      </form>

}