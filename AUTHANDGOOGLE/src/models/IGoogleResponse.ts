import { IImage } from "./IImage";

export interface IGoogleResponse {
  items: IImage[];
  searchInformation: {
    searchTime: number;
  };
  spelling?: {
    
    correctedQuery: string;
  };
}