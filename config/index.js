import dotenv from "dotenv";
dotenv.config();

export const {
  PORT,
  APP_URL,
  WS_PORT,
  DATABASE_URL,
  DEBUG_MODE,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  REFRESH_SECRET,
  JWT_SECRET, 
  EMAIL_FROM
} = process.env;
