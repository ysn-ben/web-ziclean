"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/60 backdrop-blur-xl border-b border-primary/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-2xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/20">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground tracking-tighter">ZiClean</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="#features" className="text-sm font-bold hover:text-primary transition-colors tracking-wide uppercase">
            المميزات
          </Link>
          <Link href="#wholesale" className="text-sm font-bold hover:text-primary transition-colors tracking-wide uppercase">
            الجملة
          </Link>
          <Link href="#points-of-sale" className="text-sm font-bold hover:text-primary transition-colors tracking-wide uppercase">
            نقاط البيع
          </Link>
          <Link href="#testimonials" className="text-sm font-bold hover:text-primary transition-colors tracking-wide uppercase">
            آراء الزبائن
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="rounded-2xl px-8 h-12 text-sm font-bold shadow-lg shadow-primary/10 hover:scale-105 transition-transform">
            <Link href="#order">اطلب الآن</Link>
          </Button>
        </div>

      </div>
    </nav>
  );
}

