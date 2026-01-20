"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import Dropdown from "./dropdown";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/store";

export default function LanguageSelector() {
  const t = useTranslations("Header.languages");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { country, setCountry } = useAppStore();
  const [countries, setCountries] = useState<
    { code: string; name: string; flag: string }[]
  >([]);

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <Dropdown
      label={
        <>
          <span style={{ fontSize: "1.2rem" }}>{currentLang.flag}</span>{" "}
          {currentLang.label}
        </>
      }
    >
      <div className="p-4 dropdown-menu-custom">
        <h6 className="fw-bold mb-3 text-body">{t("title")}</h6>

        <div className="d-flex flex-column gap-2 mb-4">
          {languages.map((lang) => {
            const isSelected = locale === lang.code;
            return (
              <div
                key={lang.code}
                className={`d-flex align-items-center justify-content-between p-2 rounded border-2 dropdown-item-custom relative ${
                  isSelected
                    ? "border-primary text-primary selected"
                    : "border-transparent text-body"
                }`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: "1.2rem" }}>{lang.flag}</span>
                  <span className="fw-bold" style={{ fontSize: "15px" }}>
                    {lang.label}
                  </span>
                </div>
                {isSelected && (
                  <div className="absolute top-1 right-1 translate-middle">
                    <CheckCircle2 size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <hr className="text-muted opacity-25 my-3" />

        <h6 className="fw-bold mb-3 text-body">{t("country_title")}</h6>
        <div className="d-flex flex-column gap-2">
          {countries.map((c) => {
            const isSelected = country === c.code;
            return (
              <div
                key={c.code}
                className={`d-flex align-items-center justify-content-between p-2 rounded border dropdown-item-custom relative ${
                  isSelected
                    ? "border-primary text-primary selected"
                    : "border-transparent text-body"
                }`}
                onClick={() => setCountry(c.code)}
              >
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: "1.2rem" }}>{c.flag}</span>
                  <span className="fw-bold" style={{ fontSize: "15px" }}>
                    {c.name}
                  </span>
                </div>
                {isSelected && (
                  <div className="absolute top-1 right-1 translate-middle">
                    <CheckCircle2 size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Dropdown>
  );
}
