import mongoose from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const Schema = mongoose.Schema;

// Define the Variant schema
const variantSchema = new Schema<IVariant>({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

// Define the Inventory schema
const inventorySchema = new Schema<IInventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

// Define the Product schema
const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true }
});

// Create the Product model
export const Product = mongoose.model<IProduct>('Product', productSchema);

