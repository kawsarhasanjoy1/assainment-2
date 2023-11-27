import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  url: process.env.MONGOOSE_URL,
  bcrypt: process.env.BCRYPT_ROUNDS,
};
