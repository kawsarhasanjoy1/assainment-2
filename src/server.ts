import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import userRouter from "./app/modules/User/user-routes";

async function main() {
  try {
    await mongoose.connect(config.url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
      app.use("/api", userRouter);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
