const express = require("express");
const app = express();
const PORT = 3000;
const userRoutes = require("./routes/userRoutes");

app.set("view engine", "ejs");
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log("Server is up and running");
});
