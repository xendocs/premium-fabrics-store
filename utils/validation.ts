import { z } from 'zod';

export const shippingAddressSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  company: z.string().optional(),
  address1: z.string().min(1),
  address2: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zip: z.string().min(6).max(6),
  country: z.string().default('IN'),
  phone: z.string().min(10),
});

export const checkoutSchema = z.object({
  email: z.string().email(),
  shippingAddress: shippingAddressSchema,
  billingAddress: shippingAddressSchema.partial().optional(),
  sameAsShipping: z.boolean().default(true).optional(),
  paymentMethod: z.string().default('card').optional(),
  promoCode: z.string().optional(),
  saveCard: z.boolean().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

