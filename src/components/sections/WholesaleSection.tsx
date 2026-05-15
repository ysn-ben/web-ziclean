"use client";

import { buttonVariants } from "@/components/ui/button";
import { Package, Mail, Phone, CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";

export default function WholesaleSection() {
  return (
    <section id="wholesale" className="py-32 bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">
      {/* Organic Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-10 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-5 rounded-full blur-[80px] -ml-32 -mb-32" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 shadow-sm backdrop-blur-sm">
                <Package className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold tracking-wide">حلول الجملة والطلبات الخاصة</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">شريككم المثالي للنمو والاستدامة</h2>
              
              <p className="text-xl opacity-80 leading-relaxed font-light">
                نحن لا نوفر فقط منتجاً، بل نقدم حلولاً مخصصة لشركائنا. سواء كنت تبحث عن كميات كبيرة لتجارتك أو تركيبات خاصة لعملائك الحساسين، نحن هنا لتلبية احتياجاتك.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-lg">كميات مخصصة لأصحاب الحساسية (بدون بيكربونات)</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-lg">أسعار تنافسية للطلبات الكبيرة</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid gap-6"
            >
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 space-y-6 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold">تواصل تجاري</h3>
                <p className="text-lg opacity-70">لطلبات الجملة والشراكات الرسمية، يسعدنا تواصلكم عبر البريد الإلكتروني.</p>
                <a href="mailto:ziclean.dz@gmail.com" className="inline-block text-2xl font-bold text-accent hover:underline decoration-2 underline-offset-8">
                  ziclean.dz@gmail.com
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 space-y-6 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold">اتصال مباشر</h3>
                <p className="text-lg opacity-70">هل لديك طلب خاص أو مستعجل؟ فريقنا جاهز للرد على استفساراتكم.</p>
                <a href="#order" className={buttonVariants({ variant: "secondary", className: "w-full h-16 rounded-2xl text-xl font-bold flex items-center justify-center hover:scale-[1.02] transition-transform" })}>طلب عرض سعر</a>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

