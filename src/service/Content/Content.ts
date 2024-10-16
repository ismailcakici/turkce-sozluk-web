import axios from "axios";
import { ContentResponse } from "../../types/Content/ContentResponse";
import { baseUrl } from "../../constants/BaseURL/BaseURL";

export const fetchContentData = async (): Promise<ContentResponse> => {
    try {
        const response = await axios.get<ContentResponse>(`${baseUrl}/icerik`);
        return response.data;
    } catch (error) {
        console.error("Error fetching content data", error);
        throw error;
    }
};