import { z } from 'zod';

// Define the Variant schema
const variantValidationSchema = z.object({
    type: z.string(),
    value: z.string()
});

// Define the Inventory schema
const inventoryValidationSchema = z.object({
    quantity: z.number(),
    inStock: z.boolean()
});

// Define the Product schema
const crateProductValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(variantValidationSchema),
    inventory: inventoryValidationSchema
});
const updateProductValidationSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    variants: z.array(variantValidationSchema).optional(),
    inventory: inventoryValidationSchema.optional()
});


export const productZodValidation = {
    crateProductValidationSchema,
    updateProductValidationSchema
}