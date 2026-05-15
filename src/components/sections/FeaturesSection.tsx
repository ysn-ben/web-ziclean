"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, ShieldCheck, Droplets, Zap, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "طبيعي 100%",
    description: "مكونات مستخلصة من الطبيعة لضمان نظافة آمنة.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "متعدد الاستعمالات",
    description: "فعال كـ مزيل دهون، مزيل بقع، ومنظف أسطح في منتج واحد.",
    icon: Sparkles,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "آمن وصحي",
    description: "غير مسبب للحساسية وآمن تماماً للاستخدام العائلي.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "عطر الليمون",
    description: "انتعاش يدوم طويلاً بفضل مستخلص الليمون الطبيعي.",
    icon: Droplets,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    title: "قوة في التنظيف",
    description: "يقضي على أصعب الدهون والبقع بفعالية الطبيعة.",
    icon: Zap,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "صديق للبيئة",
    description: "مكونات قابلة للتحلل الحيوي تحافظ على كوكبنا.",
    icon: Recycle,
    color: "text-green-700",
    bg: "bg-green-50",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            سر النظافة الطبيعية
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light"
          >
            نجمع بين قوة التنظيف القصوى والمكونات الطبيعية لنقدم لك الحل الأمثل لمنزلك ولعائلتك.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="border-none bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-[2rem]">
                <CardContent className="p-10 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

