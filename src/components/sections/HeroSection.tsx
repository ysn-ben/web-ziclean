"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle2, Leaf, Droplets } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[var(--background)]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--secondary)] opacity-10 rounded-full blur-3xl -mr-64 -mt-64 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--accent)] opacity-10 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm backdrop-blur-sm">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide">منظف طبيعي 100% مستوحى من الطبيعة</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-foreground leading-[1.1]">
                <span className="text-primary block">ZiClean</span>
                <span className="text-4xl lg:text-6xl font-medium opacity-90">قوة الطبيعة في التنظيف</span>
              </h1>
              <div className="w-24 h-1.5 bg-primary rounded-full" />
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-xl font-light">
              ليس مجرد منظف، بل ثورة في عالم النظافة الصحية. فعال ضد الدهون والبقع، وآمن تماماً لعائلتكم وللبيئة.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="#order" className={buttonVariants({ size: "lg", className: "rounded-2xl px-10 text-xl h-16 shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300" })}>
                <ShoppingCart className="ml-3 w-6 h-6" />
                اطلب الآن
              </a>

              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">230 دج</span>
                <span className="text-sm text-muted-foreground">السعر للوحدة شامل الضريبة</span>
              </div>
            </div>

            <div className="flex gap-8 pt-6 grayscale opacity-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">جودة جزائرية</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5" />
                <span className="text-sm font-medium">عطر ليمون فواح</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(75,122,62,0.3)] border-4 border-white">
              <Image
                src="/pictures/product-2.jpg"
                alt="ZiClean Premium Presentation"
                width={700}
                height={900}
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block max-w-[200px] border border-primary/10"
            >
              <p className="text-sm font-bold text-primary mb-1">انتعاش الليمون</p>
              <p className="text-xs text-muted-foreground">يقضي على الروائح الكريهة ويترك منزلك منعشاً طوال اليوم.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

