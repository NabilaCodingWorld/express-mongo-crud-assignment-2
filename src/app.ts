import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./modules/order/order.route";

const app = express();

app.use(cors());

app.use(express.json());

// products routes
app.use('/api/products',ProductRoutes);
app.use('/api/orders',OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.all("*", (req: Request, res: Response) => {
  res.json({
    success: false,
    message: "Route not found",
  });
});

export default app;
