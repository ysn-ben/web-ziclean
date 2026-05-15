import Link from "next/link";
import { Mail, Leaf } from "lucide-react";



export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-20">
          <div className="col-span-1 lg:col-span-2 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="bg-primary p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-4xl font-bold tracking-tighter">ZiClean</span>
            </Link>
            
            <p className="text-2xl font-light opacity-70 max-w-md leading-relaxed">
              نحن نؤمن بأن النظافة الحقيقية تبدأ من احترام الطبيعة. ZiClean هو نتاج شغفنا بتقديم الأفضل لعائلتكم ولبيئتنا.
            </p>

            <div className="flex gap-6">
              <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <div className="font-bold">FB</div>
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <div className="font-bold">IG</div>
              </a>
              <a href="mailto:ziclean.dz@gmail.com" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-xl font-bold text-accent tracking-widest uppercase">اكتشف المزيد</h4>
            <ul className="space-y-6">
              <li><Link href="#features" className="text-lg opacity-60 hover:opacity-100 hover:text-accent transition-all">سر الطبيعة</Link></li>
              <li><Link href="#wholesale" className="text-lg opacity-60 hover:opacity-100 hover:text-accent transition-all">خدمات الجملة</Link></li>
              <li><Link href="#points-of-sale" className="text-lg opacity-60 hover:opacity-100 hover:text-accent transition-all">أماكن التواجد</Link></li>
              <li><Link href="#testimonials" className="text-lg opacity-60 hover:opacity-100 hover:text-accent transition-all">قصص النجاح</Link></li>
            </ul>
          </div>

          <div id="contact" className="space-y-10">
            <h4 className="text-xl font-bold text-accent tracking-widest uppercase">تواصل معنا</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm opacity-50 uppercase tracking-tighter">البريد الإلكتروني</p>
                  <p className="text-lg font-bold">ziclean.dz@gmail.com</p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-3xl font-bold text-primary tracking-tighter">قوة الطبيعة فالتنظيف</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-sm tracking-widest uppercase">
          <p>© {new Date().getFullYear()} ZiClean Natural Power.</p>
          <div className="flex gap-10">
          </div>
        </div>
      </div>
    </footer>
  );
}

