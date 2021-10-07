import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
