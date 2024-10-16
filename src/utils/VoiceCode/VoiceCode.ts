import { baseUrl } from "../../constants/BaseURL/BaseURL";

export const fetchAudioUrl = (seskod: string): string => {
  return `${baseUrl}/ses/${seskod}.wav`;
};
