"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme-mode") === "light";
  });

  useEffect(() => {
    document.body.classList.toggle("theme-light", light);
  }, [light]);

  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.body.classList.toggle("theme-light", next);
    window.localStorage.setItem("theme-mode", next ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-orange-400 hover:text-orange-300"
      aria-label="Tema değiştir"
    >
      {light ? <FaMoon /> : <FaSun />}
      {light ? "Koyu Tema" : "Aydınlık Tema"}
    </button>
  );
}
