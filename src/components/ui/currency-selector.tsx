"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { CircleDollarSign, CheckCircle2 } from "lucide-react";
import { useAppStore, type Currency } from "@/store/store";

export default function CurrencySelector() {
  const t = useTranslations("Header.currencies");
  const { currency, setCurrency } = useAppStore();
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    fetch("/api/currencies")
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);

  return (
    <Dropdown
      label={
        <>
          <CircleDollarSign size={18} /> {currency.code}
        </>
      }
    >
      <div className="p-3 dropdown-menu-custom dropdown-menu-custom--currency">
        <h6 className="fw-bold mb-3 text-dark">{t("title")}</h6>
        <div className="d-flex flex-column gap-2">
          {currencies.map((curr) => {
            const isSelected = currency.code === curr.code;
            return (
              <div
                key={curr.code}
                className={`d-flex align-items-center justify-content-between p-2 rounded border dropdown-item-custom ${
                  isSelected
                    ? "border-primary text-primary selected"
                    : "border-transparent text-dark"
                }`}
                onClick={() => setCurrency(curr)}
              >
                <div className="d-flex align-items-center gap-2">
                  <span
                    className="fw-bold d-flex align-items-center justify-content-center bg-light rounded-circle"
                    style={{ width: "30px", height: "30px", fontSize: "14px" }}
                  >
                    {curr.symbol}
                  </span>
                  <div
                    className="d-flex flex-column"
                    style={{ lineHeight: "1.2" }}
                  >
                    <span className="fw-bold" style={{ fontSize: "14px" }}>
                      {curr.code}
                    </span>
                    <span className="text-muted" style={{ fontSize: "11px" }}>
                      {curr.name}
                    </span>
                  </div>
                </div>
                {isSelected && (
                  <CheckCircle2 size={18} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Dropdown>
  );
}
