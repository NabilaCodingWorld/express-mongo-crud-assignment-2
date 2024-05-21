import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const addNewProductOrderIntoDB = async (orderData: IOrder) => {
  const { productId, quantity } = orderData;

  const isProductExists = await Product.findById(productId);
  if (!isProductExists) {
    throw new Error("Product not found!");
  }
  console.log(isProductExists);
  console.log(isProductExists?.inventory?.quantity);
  if (quantity > isProductExists?.inventory?.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  const result = await Order.create(orderData);

  return result;
};

const getAllOrdersFromDb = async (email?: string) => {
  const query = email ? { email } : {};
  const result = await Order.find(query);
  return result;
};

export const OrderService = {
  addNewProductOrderIntoDB,
  getAllOrdersFromDb,
};
