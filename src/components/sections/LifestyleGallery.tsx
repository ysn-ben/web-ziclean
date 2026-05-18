"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Waves, Zap, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "تنظيف الأواني",
    description: "يزيل الدهون العنيدة ويترك الأواني تلمع كأنها جديدة.",
    image: "/pictures/product-1.jpg",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    title: "إزالة البقع",
    description: "فعال جداً في إزالة أصعب بقع الملابس والمنسوجات.",
    image: "/pictures/product-3.jpg",
    icon: <Zap className="w-6 h-6" />,
  },
];

export default function LifestyleGallery() {
  return (
    <section className="py-32 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">نتائج مذهلة في كل زاوية</h2>
          <p className="text-xl text-muted-foreground font-light">
            ZiClean ليس مجرد سائل تنظيف، إنه شريكك المثالي للحصول على نظافة مثالية بأقل مجهود.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-xl border border-primary/5 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Tag */}
              <div className="absolute top-8 left-8">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-sm">
                  <ShieldCheck className="w-3 h-3" />
                  <span>آمن وفعال</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
