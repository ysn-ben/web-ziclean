"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ShoppingBag, MapPin, Phone, User, Package } from "lucide-react";
import { sendOrder, OrderState } from "@/app/actions/order";
import { Button } from "@/components/ui/button";

const initialState: OrderState = {
  success: false,
};

export default function OrderSection() {
  const [state, formAction, isPending] = useActionState(sendOrder, initialState);

  return (
    <section id="order" className="py-32 bg-[#FDFCF7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent opacity-10 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide">اطلب الآن واستلم في منزلك</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
              جاهز لتجربة <br /> <span className="text-primary italic">قوة الطبيعة؟</span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              املأ الاستمارة وسنقوم بالتواصل معك لتأكيد الطلب. التوصيل متوفر في العاصمة والولايات المجاورة.
            </p>

            <div className="space-y-6 pt-6">
              {[
                { icon: <CheckCircle2 />, text: "دفع عند الاستلام" },
                { icon: <CheckCircle2 />, text: "توصيل سريع وآمن" },
                { icon: <CheckCircle2 />, text: "دعم فني واستشارة مجانية" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium text-foreground/80">
                  <div className="text-primary">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(27,67,50,0.08)] border border-primary/5"
          >
            {state.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-8"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">تم استلام طلبك بنجاح!</h3>
                  <p className="text-lg text-muted-foreground">شكراً لثقتك في ZiClean. سنقوم بالاتصال بك في أقرب وقت ممكن لتأكيد التفاصيل.</p>
                </div>
                <Button 
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="rounded-2xl px-10 h-14 text-lg"
                >
                  إرسال طلب آخر
                </Button>
              </motion.div>
            ) : (
              <form action={formAction} className="space-y-8">
                <div className="grid gap-6">
                  <div className="space-y-2 group">
                    <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                      <User className="w-4 h-4" />
                      الاسم الكامل
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="أدخل اسمك هنا"
                      className="w-full h-16 px-6 rounded-2xl bg-[#FDFCF7] border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-lg font-medium"
                    />
                    {state.errors?.name && <p className="text-red-500 text-sm font-medium">{state.errors.name[0]}</p>}
                  </div>

                  <div className="space-y-2 group">
                    <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      رقم الهاتف
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="06 00 00 00 00"
                      className="w-full h-16 px-6 rounded-2xl bg-[#FDFCF7] border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-lg font-medium"
                    />
                    {state.errors?.phone && <p className="text-red-500 text-sm font-medium">{state.errors.phone[0]}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                        <Package className="w-4 h-4" />
                        الكمية
                      </label>
                      <input
                        name="quantity"
                        type="number"
                        min="1"
                        defaultValue="1"
                        required
                        className="w-full h-16 px-6 rounded-2xl bg-[#FDFCF7] border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-lg font-medium"
                      />

                    </div>

                    <div className="space-y-2 group">
                      <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                        <span className="text-primary font-bold">230 دج</span>
                        للوحدة
                      </label>
                      <div className="w-full h-16 px-6 rounded-2xl bg-primary/5 flex items-center justify-center font-bold text-primary text-xl">
                        الدفع كاش
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                      <MapPin className="w-4 h-4" />
                      العنوان الكامل
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={3}
                      placeholder="البلدية، الحي، رقم الشقة..."
                      className="w-full p-6 rounded-2xl bg-[#FDFCF7] border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-lg font-medium resize-none"
                    />
                    {state.errors?.address && <p className="text-red-500 text-sm font-medium">{state.errors.address[0]}</p>}
                  </div>
                </div>

                {state.errors?.root && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-600 font-medium text-center border border-red-100">
                    {state.errors.root[0]}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-20 bg-primary text-primary-foreground rounded-2xl text-2xl font-bold shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-4 group"
                >
                  {isPending ? (
                    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>تأكيد الطلب الآن</span>
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rotate-180" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
