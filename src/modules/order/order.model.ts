import mongoose from "mongoose";
import { IOrder } from "./order.interface";
const Schema = mongoose.Schema;

// Define the Order schema
const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Create the Order model
export const Order = mongoose.model<IOrder>("Order", orderSchema);


