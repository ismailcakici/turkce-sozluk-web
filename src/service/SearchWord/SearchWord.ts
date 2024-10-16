import axios from "axios";
import { WordResponse } from "../../types/Word/WordResponse";
import { baseUrl } from "../../constants/BaseURL/BaseURL";

export const fetchWordData = async (word: string): Promise<WordResponse[]> => {
  try {
    const response = await axios.get<WordResponse[]>(`${baseUrl}/gts?ara=${word}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching word data", error);
    throw error;
  }
};
