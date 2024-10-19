import axios from "axios";
import { baseUrl } from "../../constants/BaseURL/BaseURL";

export const findVoiceCode = async (word: string): Promise<string | null> => {
  try {
    const response = await axios.get(`${baseUrl}/yazim?ara=${word}`);
    if (response.data && response.data.length > 0) {
      return response.data[0].seskod;
    }
  } catch (error) {
    console.error("Ses kodu bulunamadı:", error);
  }
  return null;
}


export const fetchAudioUrl = async (word: string): Promise<string> => {
  const seskod = await findVoiceCode(word);
  return `${baseUrl}/ses/${seskod}.wav`;
};
