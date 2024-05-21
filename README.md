# Backend Server Setup Guide

This guide will help you set up and run the backend server for your project locally.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally
- Git installed (optional)

## Links

- GitHub Link: https://github.com/NabilaCodingWorld/express-mongo-crud-assignment-2
- Live Link: https://express-mongo-crud.vercel.app/

## Installation

1. Clone this repository to your local machine using Git (if you have Git installed), or download the project as a ZIP file and extract it.

2. Navigate into the project directory:

3. Install dependencies using npm:

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

## Running the Server

To start the server, run the following command:

The server will start running on port 3000 by default.

## API Endpoints

### Product Management

1. **Create a New Product**

   - **Endpoint:** `/api/products`
   - **Method:** POST

2. **Retrieve a List of All Products**

   - **Endpoint:** `/api/products`
   - **Method:** GET

3. **Retrieve a Specific Product by ID**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** GET

4. **Update Product Information**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** PUT

5. **Delete a Product**

   - **Endpoint:** `/api/products/:productId`
   - **Method:** DELETE

6. **Search for a Product**

   - **Endpoint:** `/api/products?searchTerm=iphone`
   - **Method:** GET

### Order Management

1. **Create a New Order**

   - **Endpoint:** `/api/orders`
   - **Method:** POST

2. **Retrieve All Orders**

   - **Endpoint:** `/api/orders`
   - **Method:** GET

3. **Retrieve Orders by User Email**

   - **Endpoint:** `/api/orders?email=level2@programming-hero.com`
   - **Method:** GET

## Testing

You can use tools like Postman or curl to test the API endpoints.

## Support

If you encounter any issues or have any questions, feel free to contact us at <support-email>.

Happy coding!
