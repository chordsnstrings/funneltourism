import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateLead } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import type { Package } from "@workspace/api-client-react";

// Matching schema requirements from OpenAPI
const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Valid phone required").max(20),
  packageId: z.number().optional().nullable(),
  packageName: z.string().optional().nullable(),
  travelDate: z.string().optional().nullable(),
  groupSize: z.coerce.number().min(1, "Minimum 1 person").optional().nullable(),
  message: z.string().max(1000).optional().nullable(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadFormProps {
  selectedPackage?: Package;
  onSuccess?: () => void;
  className?: string;
}

export function LeadForm({ selectedPackage, onSuccess, className }: LeadFormProps) {
  const { toast } = useToast();
  const createLeadMutation = useCreateLead();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      packageId: selectedPackage?.id || null,
      packageName: selectedPackage?.name || null,
      groupSize: 2,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await createLeadMutation.mutateAsync({ data });
      toast({
        title: "Inquiry Sent Successfully",
        description: "Our luxury travel concierge will contact you shortly.",
        variant: "default",
      });
      reset();
      onSuccess?.();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`bg-card p-6 md:p-8 border border-white/10 shadow-2xl ${className || ''}`}>
      <h3 className="font-serif text-2xl text-white mb-2">
        {selectedPackage ? `Book ${selectedPackage.name}` : "Plan Your Experience"}
      </h3>
      <p className="text-gray-400 text-sm mb-6">Leave your details and our team will craft your perfect itinerary.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-gray-500">Full Name *</label>
            <input
              {...register("name")}
              className="w-full bg-background border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-gray-500">Email Address *</label>
            <input
              {...register("email")}
              type="email"
              className="w-full bg-background border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-gray-500">Phone Number *</label>
            <input
              {...register("phone")}
              className="w-full bg-background border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="+971 50 123 4567"
            />
            {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-gray-500">Travel Date</label>
              <input
                {...register("travelDate")}
                type="date"
                className="w-full bg-background border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors [color-scheme:dark]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-gray-500">Guests</label>
              <input
                {...register("groupSize")}
                type="number"
                min="1"
                className="w-full bg-background border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {!selectedPackage && (
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-gray-500">Interested In</label>
            <input
              {...register("packageName")}
              className="w-full bg-background border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="e.g. Dubai Desert Safari, Fujairah Tour..."
            />
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-gray-500">Special Requests</label>
          <textarea
            {...register("message")}
            rows={3}
            className="w-full bg-background border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
            placeholder="Any dietary requirements or special celebrations?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-gold text-background font-semibold uppercase tracking-widest py-4 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            "Request Booking"
          )}
        </button>
      </form>
    </div>
  );
}
