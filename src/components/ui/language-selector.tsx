"use client";

import Dropdown from "./dropdown";
import { Globe } from "lucide-react";
import { useAppStore } from "@/store/store";

export default function LanguageSelector() {
  const { language, setLanguage } = useAppStore();
  const languages = ["Español", "English", "Português"];

  return (
    <Dropdown label={<><Globe size={18} /> {language}</>}>
       <div className="p-2">
        {languages.map((lang) => (
          <div
            key={lang}
            className={`dropdown__item rounded ${language === lang ? "bg-light text-primary fw-bold" : ""}`}
            onClick={() => setLanguage(lang)}
            style={{ cursor: "pointer" }}
          >
            {lang}
          </div>
        ))}
      </div>
    </Dropdown>
  );
}
