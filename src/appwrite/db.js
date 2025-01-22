import {
  database,
  DATABASE_ID,
  COLLECTION_ID_TECH,
  COLLECTION_ID_NONTECH,
} from "../utils/config.js";

export const dbService = {
  getTechEvents: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_TECH
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching tech events:", error);
      throw error;
    }
  },

  getNonTechEvents: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_NONTECH
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching non-tech events:", error);
      throw error;
    }
  },
};
