export type TTag = string;

export interface IVariant {
    type: string;
    value: string;
}

export interface IInventory {
    quantity: number;
    inStock: boolean;
}

export interface IProduct {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: TTag[];
    variants: IVariant[];
    inventory: IInventory;
}
