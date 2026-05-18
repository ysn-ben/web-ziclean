"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  CheckCircle2, 
  Leaf, 
  Droplets, 
  Sparkles
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[var(--background)]">
      {/* Decorative premium background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -mr-80 -mt-80 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />
      
      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 text-right"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-md backdrop-blur-md hover:bg-primary/15 transition-all duration-300">
              <Leaf className="w-5 h-5 animate-bounce" />
              <span className="text-sm font-extrabold tracking-wide">منظف طبيعي 100% مستوحى من الطبيعة</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight">
                <span className="text-primary block bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent pb-2 drop-shadow-sm">ZiClean</span>
                <span className="text-4xl lg:text-6xl font-extrabold opacity-95">قوة الطبيعة في التنظيف</span>
              </h1>
              <div className="w-32 h-2 bg-gradient-to-l from-primary to-accent rounded-full shadow-inner" />
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed max-w-xl font-light">
              ليس مجرد منظف، بل ثورة في عالم النظافة الصحية. فعال ضد الدهون والبقع، وآمن تماماً لعائلتكم وللبيئة.
            </p>

            <div className="flex flex-col sm:flex-row-reverse gap-8 items-start sm:items-center justify-start">
              <a href="#order" className={buttonVariants({ size: "lg", className: "rounded-2xl px-12 text-xl h-16 shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-300 font-bold bg-primary hover:bg-primary/95 text-white cursor-pointer" })}>
                <ShoppingCart className="ml-3 w-6 h-6" />
                اطلب الآن
              </a>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-extrabold text-primary">230 دج</span>
                </div>
                <span className="text-sm text-muted-foreground mt-1">السعر للوحدة شامل الضريبة</span>
              </div>
            </div>

            <div className="flex gap-10 pt-6 justify-start border-t border-primary/10">
              <div className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">جودة جزائرية 🇩🇿</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">عطر ليمون فواح 🍋</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold">تألق ولمعان فوري</span>
              </div>
            </div>
          </motion.div>

          {/* Premium Static Presentation Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Interactive Product Card Container */}
            <div 
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(75,122,62,0.25)] border-4 border-white/90 bg-white aspect-[4/5] lg:aspect-[3/4] flex items-center justify-center group group-hover:border-primary/20 transition-all duration-500"
            >
              <Image
                src="/pictures/product-2.jpg"
                alt="ZiClean Premium Presentation"
                width={700}
                height={900}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Radial gradient to mask image edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glowing background halo */}
            <div className="absolute inset-0 z-0 bg-primary/20 rounded-[2.5rem] blur-2xl transform translate-y-4 scale-95 opacity-50 pointer-events-none group-hover:opacity-75 transition-opacity" />
            
            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl z-20 hidden md:block max-w-[220px] border border-primary/10 text-right"
            >
              <div className="flex items-center gap-2 justify-end mb-1">
                <span className="text-xs font-bold text-accent-foreground bg-accent/60 px-2 py-0.5 rounded">عضوي</span>
                <p className="text-sm font-extrabold text-primary">انتعاش الليمون 🍋</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">يقضي على الروائح الكريهة ويترك منزلك منعشاً طوال اليوم برائحة طبيعية فواحة.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


