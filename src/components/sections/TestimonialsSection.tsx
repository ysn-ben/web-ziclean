"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ReviewForm from "./ReviewForm";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            نحن نهتم برأيك
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light"
          >
            شاركنا تجربتك مع منتجات ZiClean ليتمكن الآخرون من الاستفادة منها.
          </motion.p>
        </div>

        {/* Review Form Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ReviewForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
