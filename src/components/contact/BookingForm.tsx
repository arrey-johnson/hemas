"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { CONTACT } from "@/lib/constants";
import {
  bookingSchema,
  type BookingFormData,
  serviceInterestOptions,
} from "@/lib/booking-schema";
import { EVENT_TYPES_LIST } from "@/lib/service-packages";

const serviceLabels: Record<(typeof serviceInterestOptions)[number], string> = {
  decor: "Event Decoration",
  rental: "Rentals",
  catering: "Catering",
};

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-plum-800">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-rose-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-champagne-200 bg-ivory-50 px-4 py-3 text-plum-900 transition-colors placeholder:text-plum-400/60 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20";

export function BookingForm() {
  const searchParams = useSearchParams();
  const prefillItem = searchParams.get("item");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      guestCount: undefined,
      serviceInterest: "decor",
      message: prefillItem ? `I'm interested in: ${prefillItem}` : "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Booking inquiry:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-champagne-200/40 bg-white p-10 text-center shadow-card"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50">
          <CheckCircle2 className="h-8 w-8 text-rose" />
        </div>
        <h2 className="mt-6 font-serif text-2xl font-bold text-plum-900">
          Thank You!
        </h2>
        <p className="mt-3 text-plum-700/80">
          Your inquiry has been received. Our team will reach out within 24
          hours to discuss your event details.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-semibold text-rose-dark hover:text-rose"
        >
          Submit another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-champagne-200/40 bg-white p-8 shadow-card sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full Name *" error={errors.name?.message}>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              {...register("name")}
              type="text"
              placeholder="Your name"
              className={`${inputClass} pl-10`}
            />
          </div>
        </FormField>

        <FormField label="Email Address *" error={errors.email?.message}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className={`${inputClass} pl-10`}
            />
          </div>
        </FormField>

        <FormField label="Phone (optional)" error={errors.phone?.message}>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              {...register("phone")}
              type="tel"
              placeholder="(904) 555-1234"
              className={`${inputClass} pl-10`}
            />
          </div>
        </FormField>

        <FormField label="Event Date *" error={errors.eventDate?.message}>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              {...register("eventDate")}
              type="date"
              className={`${inputClass} pl-10`}
            />
          </div>
        </FormField>

        <FormField label="Event Type *" error={errors.eventType?.message}>
          <select {...register("eventType")} className={inputClass}>
            <option value="" disabled>
              Select event type
            </option>
            {EVENT_TYPES_LIST.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Estimated Guest Count *"
          error={errors.guestCount?.message}
        >
          <input
            {...register("guestCount")}
            type="number"
            min={1}
            placeholder="e.g. 75"
            className={inputClass}
          />
        </FormField>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-plum-800">
          Service Interest *
        </legend>
        <div className="flex flex-wrap gap-4">
          {serviceInterestOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-champagne-200 px-4 py-2.5 text-sm transition-colors has-[:checked]:border-rose has-[:checked]:bg-rose-50 has-[:checked]:text-rose-dark"
            >
              <input
                {...register("serviceInterest")}
                type="radio"
                value={option}
                className="accent-rose"
              />
              {serviceLabels[option]}
            </label>
          ))}
        </div>
        {errors.serviceInterest && (
          <p className="mt-2 text-sm text-rose-dark" role="alert">
            {errors.serviceInterest.message}
          </p>
        )}
      </fieldset>

      <FormField label="Additional Details" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your vision, theme, or any rental items you're interested in..."
          className={`${inputClass} resize-none`}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-bold text-plum-900">
          Get in Touch
        </h2>
        <p className="mt-3 text-plum-700/80">
          Ready to start planning? Fill out the form and we&apos;ll be in touch
          shortly. You can also reach us directly.
        </p>
      </div>

      <ul className="space-y-5">
        <li className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-plum-900">Address</p>
            <p className="mt-1 text-sm text-plum-700/70">
              {CONTACT.address}
              <br />
              {CONTACT.city}
            </p>
          </div>
        </li>
        {CONTACT.phones.map((phone) => (
          <li key={phone} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-plum-900">Phone</p>
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="mt-1 text-sm text-rose-dark hover:text-rose"
              >
                {phone}
              </a>
            </div>
          </li>
        ))}
        <li className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-plum-900">Email</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-1 text-sm text-rose-dark hover:text-rose"
            >
              {CONTACT.email}
            </a>
          </div>
        </li>
      </ul>

      <div className="overflow-hidden rounded-2xl border border-champagne-200/60 shadow-soft">
        <iframe
          title="Hemas Decor location — Jacksonville, FL"
          src="https://maps.google.com/maps?q=11111+San+Jose+Blvd+Jacksonville+FL+32223&output=embed"
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="bg-ivory-100 px-4 py-3 text-center text-sm text-plum-700/70">
          Proudly serving {CONTACT.serviceArea}
        </p>
      </div>
    </div>
  );
}
