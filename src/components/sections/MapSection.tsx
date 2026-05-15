"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  { city: "الجزائر العاصمة", stores: ["سوبر ماركت الصومام", "محل النظافة بباب الواد"] },
  { city: "البليدة", stores: ["مركز التسوق الكبير", "حي أولاد يعيش"] },
  { city: "بومرداس", stores: ["شارع الاستقلال", "سوبر ماركت النور"] },
  { city: "تيزي وزو", stores: ["وسط المدينة", "حي 600 مسكن"] },
];

export default function MapSection() {
  return (
    <section id="points-of-sale" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">تجدوننا في...</h2>
          <p className="text-lg text-muted-foreground">
            انتشار واسع لنقاط البيع لضمان وصول ZiClean إليكم في كل مكان.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-4">
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{loc.city}</h3>
                        <p className="text-sm text-muted-foreground">
                          {loc.stores.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-2 relative min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border">
            {/* Using a styled iframe placeholder for the map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.946394541795!2d3.05816!3d36.7525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb21e7b8971f1%3A0x6d9f8502391b65e2!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1715789654321!5m2!1sen!2sdz"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                <Navigation className="w-5 h-5 text-primary animate-pulse" />
                <span className="font-bold text-primary">اكتشف أقرب نقطة بيع</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
