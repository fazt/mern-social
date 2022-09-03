import app from "./app";
import { connectDB } from "./db";
import { PORT } from "./config";

connectDB();

app.listen(PORT);
console.log("Server running on port 3000");
