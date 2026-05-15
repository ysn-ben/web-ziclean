"use client";

import { useActionState, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle2, MessageSquare, Mail, User } from "lucide-react";
import { submitReview, ReviewState } from "@/app/actions/rate";

const initialState: ReviewState = {
  success: false,
};

export default function ReviewForm() {
  const [state, formAction, isPending] = useActionState(submitReview, initialState);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(27,67,50,0.05)] border border-primary/5 mt-16 text-right">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-primary" />
          أضف تقييمك
        </h3>
        <p className="text-muted-foreground">شاركنا تجربتك مع ZiClean ليتمكن الآخرون من الاستفادة منها.</p>
      </div>

      <AnimatePresence mode="wait">
        {state.success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h4 className="text-2xl font-bold text-primary">شكراً لتقييمك!</h4>
            <p className="text-muted-foreground">تمت إضافة تقييمك بنجاح. نحن نقدر رأيك جداً.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            action={formAction}
            className="space-y-6"
          >
            {/* Hidden Input for Rating */}
            <input type="hidden" name="rating" value={rating} />

            <div className="space-y-3">
              <label className="text-sm font-bold text-foreground/60">تقييمك للمنتج</label>
              <div className="flex gap-2 flex-row-reverse justify-end" dir="ltr">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="p-1 transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      className={`w-10 h-10 transition-colors ${
                        star <= (hoveredRating || rating)
                          ? "fill-accent text-accent drop-shadow-[0_0_10px_rgba(248,229,140,0.5)]"
                          : "fill-transparent text-primary/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {state.errors?.rating && <p className="text-red-500 text-sm font-medium">{state.errors.rating[0]}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                  <User className="w-4 h-4" />
                  الاسم
                </label>
                <input
                  name="name"
                  required
                  placeholder="محمد علي"
                  className="w-full h-14 px-6 rounded-2xl bg-[#FDFCF7] border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-base font-medium"
                />
                {state.errors?.name && <p className="text-red-500 text-sm font-medium">{state.errors.name[0]}</p>}
              </div>

              <div className="space-y-2 group">
                <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  البريد الإلكتروني (لن يتم نشره)
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full h-14 px-6 rounded-2xl bg-[#FDFCF7] border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-base font-medium text-left"
                  dir="ltr"
                />
                {state.errors?.email && <p className="text-red-500 text-sm font-medium">{state.errors.email[0]}</p>}
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="flex items-center gap-2 text-sm font-bold text-foreground/60 group-focus-within:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" />
                تعليقك (اختياري)
              </label>
              <textarea
                name="comment"
                rows={3}
                placeholder="أخبرنا عن تجربتك مع المنتج..."
                className="w-full p-6 rounded-2xl bg-[#FDFCF7] border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-base font-medium resize-none"
              />
            </div>

            {state.errors?.root && (
              <div className="p-4 rounded-xl bg-red-50 text-red-600 font-medium text-center border border-red-100">
                {state.errors.root[0]}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="px-8 h-14 bg-primary text-primary-foreground rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 w-full md:w-auto mr-auto group"
              >
                {isPending ? (
                  <div className="w-6 h-6 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>إرسال التقييم</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rotate-180" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
