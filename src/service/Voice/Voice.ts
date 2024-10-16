import axios from "axios";
import { Voice } from "../../types/Voice/VoiceResponse";
import { baseUrl } from "../../constants/BaseURL/BaseURL";

export const fetchVoiceData = async (word:string): Promise<Voice[]> => {
    try {
        const response = await axios.get(`${baseUrl}/yazim?ara=${word}`)
        return response.data;
    } catch (error) {
        console.error("An error occured while fetching voice data.",error);
        throw error;
    }
} 