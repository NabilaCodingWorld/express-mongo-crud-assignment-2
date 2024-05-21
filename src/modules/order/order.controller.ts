import { Request, Response } from "express";
import { OrderService } from "./order.service";

const addNewProductOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderService.addNewProductOrderIntoDB(orderData);

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userEmail = req.query.email as string | undefined;

    const result = await OrderService.getAllOrdersFromDb(userEmail);

    res.status(200).json({
      success: true,
      message: userEmail
        ? `Orders fetched successfully for user email '${userEmail}'!`
        : "Orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const OrderController = {
  addNewProductOrder,
  getAllOrders,
};
