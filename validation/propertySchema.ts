import { z } from "zod";

export const propertyDataSchema = z.object({
  status: z.enum(["draft", "for-sale", "withdrawn", "sold"]),
  address1: z.string().min(1, "Address line 1 must contain a value"),
  address2: z.string().optional(),
  city: z.string().min(3, "City must contain at least 3 characters"),
  state: z.string().min(2, "State must contain a value"),
  zipCode: z
    .string()
    .min(5, "Zip code must be 5 digits long")
    .max(5, "Zip code must be 5 digits long"),
  price: z.coerce.number().positive("Price must be greater than zero"),
  description: z
    .string()
    .min(40, "Description must contain at least 40 characters"),
  bedrooms: z.coerce.number().min(0, "Bedrooms must be at least zero"),
  bathrooms: z.coerce.number().min(0, "Bathrooms must be at least zero"),
});

export const propertyImagesSchema = z.object({
  images: z.array(
    z.object({
      id: z.string(),
      url: z.string(),
      file: z.instanceof(File).optional(),
    })
  ),
});

export const propertySchema = propertyDataSchema.and(propertyImagesSchema);
