import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import morgan from "morgan";

import postRoutes from "./routes/post.routes";
import indexRoutes from "./routes/index.routes";
import authRoutes from './routes/auth.routes'

const app = express();

// Settings
app.set('json spaces', 2);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.use(indexRoutes);
app.use(postRoutes);
app.use(authRoutes)

export default app;
