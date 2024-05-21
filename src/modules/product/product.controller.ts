import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productZodValidation } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    //validating using zod
    const zodValidatedUserData =
      productZodValidation.crateProductValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDb(
      zodValidatedUserData
    );

    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await ProductServices.getAllProductFromDB(searchTerm);

    res.json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    console.log(req.params);
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const updateProductInfo = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const { productId } = req.params;

    //validating using zod
    const zodValidatedProductData =
      productZodValidation.updateProductValidationSchema.parse(productData);

    const result = await ProductServices.updateProductInfoFromDB(
      productId,
      zodValidatedProductData
    );

    res.json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message || "Something went wrong",
      
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProductInfo,
  deleteProduct,
};
