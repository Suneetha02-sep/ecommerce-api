import express from "express";

import productRoutes from "./routes/productRoutes.js";

const app = express();


// Middleware
app.use(express.json());


// Routes
app.use("/api", productRoutes);


// Server
const PORT = 4000;

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);
});
