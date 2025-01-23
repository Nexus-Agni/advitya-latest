import { Client, Databases } from "appwrite";

export const API_ENDPOINT = import.meta.env.VITE_APPWRITE_URL;
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTION_ID_TECH = import.meta.env
  .VITE_APPWRITE_COLLECTION_ID_TECH;
export const COLLECTION_ID_NONTECH = import.meta.env
  .VITE_APPWRITE_COLLECTION_ID_NONTECH;
export const COLLECTION_ID_FACULTY_ORGANISERS = import.meta.env
  .VITE_APPWRITE_COLLECTION_ID_FACULTY_ORGANISERS;
export const COLLECTION_ID_STUDENT_ORGANISERS = import.meta.env
  .VITE_APPWRITE_COLLECTION_ID_STUDENT_ORGANISERS;

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

export const database = new Databases(client);

export default client;
