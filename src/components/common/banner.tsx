"use client";

import { useTranslations } from "next-intl";
import { useAppStore } from "@/store/store";

export default function Banner() {
  const t = useTranslations("Banner");
  const { currency } = useAppStore();
  const price = 544448;

  const converted = price / currency.rate;
  const displayPrice = `${currency.symbol}${converted.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`;

  return (
    <div className="banner">
      <div className="container banner__inner">
        <div className="banner__title">
          {t("prefix")}{" "}
          <span className="text-muted fw-normal">
            {t("results", { count: 45 })}
          </span>
        </div>
        <div className="banner__price-info">
          <small className="text-primary">{t("from")}</small>
          <strong>
            {displayPrice}{" "}
            <span className="fw-normal text-muted fs-6">{t("day")}</span>
          </strong>
        </div>
      </div>
    </div>
  );
}
