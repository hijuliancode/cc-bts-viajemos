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
          <span className="text-muted fw-normal text-xs text-italic ml-2">
            {t("results", { count: 45 })}
          </span>
        </div>
        <div className="banner__price-info">
          <small className="d-flex gap-1 text-xs mb-1 justify-content-end">
            <span className="text-primary">+Grandes</span>
            <span className="text-gray-500">{t("from")}</span>
          </small>
          <strong className="d-flex align-items-center text-right justify-content-end">
            {displayPrice}{" "}
            <small className="fw-normal text-muted fs-6">{t("day")}</small>
          </strong>
        </div>
      </div>
    </div>
  );
}
