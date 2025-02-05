import { Client, Databases } from "appwrite";

export const API_ENDPOINT = "https://cloud.appwrite.io/v1";
export const PROJECT_ID = "6756a8dc000c0d24754b";
export const DATABASE_ID = "6756a8ee002bdaddd989";
export const COLLECTION_ID_TECH = "6756ac98003c63ae3080";
export const COLLECTION_ID_NONTECH = "6756aca4000184c4bc55";
export const COLLECTION_ID_FACULTY_ORGANISERS = "6791101d00032a5ba364";
export const COLLECTION_ID_STUDENT_ORGANISERS = "6791103e000e9491aba4";
export const COLLECTION_ID_KEY_HIGHLIGHTS = "6790da620032dac5f16b";
export const COLLECTION_ID_VIRTUAL = "67a320910008a0efa8c9";

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

export const database = new Databases(client);

export default client;
