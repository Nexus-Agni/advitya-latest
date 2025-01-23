import {
  database,
  DATABASE_ID,
  COLLECTION_ID_TECH,
  COLLECTION_ID_NONTECH,
  COLLECTION_ID_FACULTY_ORGANISERS,
  COLLECTION_ID_STUDENT_ORGANISERS,
  COLLECTION_ID_KEY_HIGHLIGHTS, // Add this line
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

  getFacultyOrganisers: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_FACULTY_ORGANISERS
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching faculty organisers:", error);
      throw error;
    }
  },

  getStudentOrganisers: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_STUDENT_ORGANISERS
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching student organisers:", error);
      throw error;
    }
  },
  getKeyHighlights: async () => {
    try {
      const response = await database.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_KEY_HIGHLIGHTS // Use the correct collection ID
      );
      return response.documents;
    } catch (error) {
      console.error("Error fetching key highlights:", error);
      throw error;
    }
  },
};