import { useTranslations } from "next-intl";
import CurrencySelector from "../ui/currency-selector";
import LanguageSelector from "../ui/language-selector";
import ThemeToggle from "../ui/theme-toggle";
import { SquareUserIcon, MessageCircleQuestionMarkIcon } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

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
          <div className="text-gray-200">|</div>
          <div className="d-flex align-items-center gap-2 cursor-pointer">
            <SquareUserIcon size={20} />
            <Link
              className="text-primary text-decoration-none text-body cursor-pointer"
              href="#"
            >
              {t("login")}
            </Link>
          </div>
          <div className="d-flex align-items-center gap-2 cursor-pointer">
            <MessageCircleQuestionMarkIcon size={20} />
            <Link
              className="text-primary text-decoration-none text-body cursor-pointer"
              href="#"
            >
              {t("help")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
