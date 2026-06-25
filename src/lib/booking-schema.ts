import { z } from "zod";

export const serviceInterestOptions = ["decor", "rental", "catering"] as const;

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s()+-]{7,20}$/.test(val),
      "Please enter a valid phone number"
    ),
  eventDate: z
    .string()
    .min(1, "Please select your event date")
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, "Event date must be today or in the future"),
  eventType: z.string().min(1, "Please select an event type"),
  guestCount: z.coerce
    .number({ invalid_type_error: "Please enter a guest count" })
    .int("Guest count must be a whole number")
    .min(1, "At least 1 guest required")
    .max(10000, "Please contact us directly for events over 10,000 guests"),
  serviceInterest: z.enum(serviceInterestOptions, {
    errorMap: () => ({ message: "Please select a service interest" }),
  }),
  message: z
    .string()
    .max(1000, "Message must be under 1000 characters")
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
