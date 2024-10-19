import axios from "axios";
import { baseUrl } from "../../constants/BaseURL/BaseURL";

export const findVoiceCode = async (word: string): Promise<string> => {
  const response = await axios.get(`${baseUrl}/yazim?ara=${word}`);
  
  if (response.data && response.data.length > 0) {
    return response.data[0].seskod;
  }

  throw new Error("Ses kodu bulunamadı");
}

export const fetchAudioUrl = async (word: string): Promise<string> => {
  const seskod = await findVoiceCode(word);
  return `${baseUrl}/ses/${seskod}.wav`;
};
