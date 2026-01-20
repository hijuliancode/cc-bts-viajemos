"use client";

import { Moon, Sun } from "lucide-react";
import { useAppStore } from "@/store/store";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 20, height: 20 }} />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-link p-0 text-body d-flex align-items-center justify-content-center"
      aria-label="Toggle theme"
      style={{ width: 40, height: 40, borderRadius: '50%' }}
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-warning" />
      ) : (
        <Moon size={20} className="text-body" />
      )}
    </button>
  );
}
