("use strict");
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb://127.0.0.1/pexpress"
        // , {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        //   useFindAndModify: false,
        // }
      )
      .then(() => {
        console.log("Connected to DB");

        // CREAR EL SERVIDOR WEB CON NODEJS
      })
      .catch((error) => console.log(error));
  } catch (error) {
    (err) => console.log(err);
  }
};

// Si no se conecta correctamente escupimos el error
