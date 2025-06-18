// hotelSchema.ts

import { z } from "zod";

export const hotelFormSchema = z.object({
  name: z.string().min(1, "Hotel name is required"),
  description: z.string().min(10, "Description should be at least 10 characters"),
  
  latitude: z.string()
    .nonempty("Latitude is required")
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: "Latitude must be a valid number" })
    .refine((val) => val >= -90 && val <= 90, { message: "Latitude must be between -90 and 90" }),

  longitude: z.string()
    .nonempty("Longitude is required")
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: "Longitude must be a valid number" })
    .refine((val) => val >= -180 && val <= 180, { message: "Longitude must be between -180 and 180" }),

  price: z.string()
    .nonempty("Price is required")
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: "Price must be a valid number" })
    .refine((val) => val >= 0, { message: "Price must be positive" }),

  image: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Image file is required",
    })
    .refine(
      (file) => file instanceof File && (file.type === "image/jpeg" || file.type === "image/jpg"),
      { message: "Only JPG files are allowed" }
    ),
});

// ✅ The input type: before Zod transforms
export type HotelFormSchemaInput = {
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  price: string;
  image: File;
};

// ✅ The output type: after Zod transforms
export type HotelFormSchema = z.infer<typeof hotelFormSchema>;
