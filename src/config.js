import { config } from "dotenv";
config()
export default {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:/products'
}