import { PropertyStatus } from "./propertyStatus";

export type Property = {
  id: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  status: PropertyStatus;
};
