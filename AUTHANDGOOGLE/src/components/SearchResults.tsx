import { useNavigate } from "react-router-dom";
import { IImage } from "../models/IImage";

interface IsearchResultProps {
  images: IImage[] | undefined;
}
export const SearchResult = ({ images }: IsearchResultProps) => {
  const navigate = useNavigate();
  return (
    <section id="images">
      {images?.map((image) => (
        <div
          key={image.link} // Du kan överväga att använda index som key för bättre prestanda i stora listor
          onClick={() => {
            navigate(`/bild?id=${encodeURIComponent(image.link)}`);
          }}
        >
          {/* <h4>{image.title}</h4> */}
          <div className="img-container">
            <img src={image.link} alt={image.title} />
          </div>
        </div>
      ))}
    </section>
  );
};
