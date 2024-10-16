import axios from "axios";
import { baseUrl } from "../../constants/BaseURL/BaseURL";

export const signLanguage = async (letter:string) : Promise<string> => {
    try {
        if (letter.length !== 1) {
            throw new Error("Letter count must be 1.")
        }
        const response = await axios.get(`${baseUrl}/assets/img/isaret/${letter}.gif`);
        return response.data;
    } catch (error) {
        console.error("An error occured while fetching sign language data.",error)
        throw error;
    }
}