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
    <section className="py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -ml-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-black text-foreground tracking-tight">نتائج مذهلة في كل زاوية</h2>
          <div className="w-24 h-1.5 bg-primary/80 rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
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
              <div className="flex items-start gap-6 mb-8 text-right flex-row-reverse">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="flex-1">
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
              <div className="absolute top-8 right-8">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-sm">
                  <ShieldCheck className="w-3 h-3" />
                  <span>آمن وفعال</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Video Showcase section for videp.mp4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-[3rem] p-8 md:p-14 shadow-2xl border border-primary/5 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold tracking-widest uppercase">
                عرض حي للمنتج 🎥
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">شاهد قوة ZiClean في العمل</h3>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                مقطع قصير يعرض الفعالية الحقيقية لتركيبة ZiClean الطبيعية وسرعتها الفائقة في تفتيت الدهون وتنظيف الأسطح المتسخة.
              </p>
            </div>

            {/* Premium widescreen video card frame */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black/95 shadow-2xl border-4 border-white ring-1 ring-primary/10">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/pictures/product-1.jpg"
              >
                <source src="/pictures/videp.mp4" type="video/mp4" />
                <source src="/pictures/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
