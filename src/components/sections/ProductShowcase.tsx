"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye, Shield } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden border-t border-primary/5">
      {/* Soft background glow blobs */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -ml-20" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none -mr-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Premium Vertical Video Player (Smartphone-style Mockup) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[3rem] overflow-hidden bg-black shadow-[0_30px_60px_-15px_rgba(75,122,62,0.3)] border-[8px] border-zinc-900 ring-4 ring-primary/20">
              {/* Speaker / Camera Notch Mockup for phone aesthetic */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-zinc-800 rounded-full mr-3" />
                <div className="w-2 h-2 bg-zinc-800 rounded-full" />
              </div>
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/pictures/product-2.jpg"
              >
                <source src="/pictures/videp.mp4" type="video/mp4" />
                <source src="/pictures/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Right Column: Text & Features Describing the Product */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-right order-1 lg:order-2"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold tracking-widest uppercase">
                تفاصيل عبوة المنتج 🧪
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-[1.2]">
                عبوة ذكية لتنظيف احترافي وسهل
              </h2>
              <div className="w-24 h-1.5 bg-primary/80 rounded-full ml-auto" />
            </div>

            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              شاهد التفاصيل الكاملة لتصميم عبوة ZiClean المبتكرة. لقد صممنا العبوة لتكون عملية واقتصادية وسهلة الاستخدام في مختلف زوايا المنزل.
            </p>

            {/* List of Product Bottle Spec Details */}
            <div className="space-y-6">
              <div className="flex gap-6 items-start justify-end flex-row-reverse text-right">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-foreground">موزع ضغط متطور وعملي</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    مضخة ضغط انسيابية تتيح لك الحصول على الكمية المثالية من السائل المركز بضغطة واحدة دون تنقيط أو هدر.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start justify-end flex-row-reverse text-right">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-foreground">عبوة بيضاء لحفظ المكونات الطبيعية</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    تصميم معتم باللون الأبيض الأنيق يحمي التركيبة الطبيعية 100% من تأثير الضوء للحفاظ على فعاليتها الفائقة لفترات طويلة.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start justify-end flex-row-reverse text-right">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-foreground">شكل مريح سهل الاستخدام</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    قالب انسيابي يناسب قبضة اليد ليوفر لك راحة تامة أثناء التنظيف المستمر لفترات طويلة.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
