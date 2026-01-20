"use client";

import { Moon, Sun } from "lucide-react";
import { useAppStore } from "@/store/store";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid "synchronous setState in effect" warning
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div style={{ width: 20, height: 20 }} />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-body d-flex align-items-center justify-content-center border p-1 w-8 h-8 cursor-pointer"
      aria-label="Toggle theme"
      style={{ borderRadius: "50%" }}
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-warning" />
      ) : (
        <Moon size={16} className="text-body" />
      )}
    </button>
  );
}
