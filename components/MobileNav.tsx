"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import type { NavItem } from "@/lib/site";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const mobileItems = items;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-600 px-4 text-sm font-semibold text-slate-100"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Menüyü aç/kapat"
      >
        {open ? <FaXmark /> : <FaBars />}
        Menü
      </button>

      {open ? (
        <nav
          id="mobile-nav-panel"
          className="mt-3 space-y-2 rounded-xl border border-slate-700 bg-slate-900 p-3"
          aria-label="Mobil menü"
        >
          {mobileItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block min-h-11 rounded-lg px-3 py-3 text-base text-slate-100 transition hover:bg-slate-800 hover:text-orange-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
