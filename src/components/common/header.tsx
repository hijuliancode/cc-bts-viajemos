import { useTranslations } from "next-intl";
import CurrencySelector from "../ui/currency-selector";
import LanguageSelector from "../ui/language-selector";
import ThemeToggle from "../ui/theme-toggle";
import { User, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">
          <Image
            src="/design/logos/logo-viajemos.svg"
            alt="Viajemos"
            width={180}
            height={40}
            priority
          />
        </div>

        <div className="header__actions">
          <ThemeToggle />
          <CurrencySelector />
          <LanguageSelector />
          <div className="d-flex align-items-center gap-2 pointer">
            <User size={20} />
            <span>{t("login")}</span>
          </div>
          <div className="d-flex align-items-center gap-2 pointer">
            <HelpCircle size={20} />
            <span>{t("help")}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
