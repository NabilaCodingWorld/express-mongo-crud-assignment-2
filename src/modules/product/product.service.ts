import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDb = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (searchTerm?: string) => {
    const query = searchTerm
    ? { name: { $regex: searchTerm, $options: 'i' } }
    : {};
  
  const result = await Product.find(query);
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  console.log(productId);
  const result = await Product.findById(productId);
  return result;
};

const updateProductInfoFromDB = async (
  productId: string,
  productData: Partial<IProduct>
) => {
  const isProductExists = await Product.findById(productId);
  if (!isProductExists) {
    throw new Error("Product not found!");
  }

  const result = await Product.findByIdAndUpdate(productId, productData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const isProductExists = await Product.findById(productId);
  if (!isProductExists) {
    throw new Error("Product not found!");
  }
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductInfoFromDB,
  deleteProductFromDB,
};
