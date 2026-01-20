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
        <h5 className="fw-semibold mt-0 mb-3 text-body">{t("title")}</h5>
        <div className="d-flex flex-column gap-2 overflow-y-auto">
          {currencies.map((curr) => {
            const isSelected = currency.code === curr.code;
            return (
              <div
                key={curr.code}
                className={`d-flex align-items-center justify-content-between px-3 py-1 rounded dropdown-item-custom relative ${
                  isSelected
                    ? "border-primary text-primary selected"
                    : "border-transparent text-body"
                }`}
                onClick={() => setCurrency(curr)}
              >
                <div className="d-flex align-items-center gap-2">
                  <span
                    className={`fw-bold d-flex align-items-center justify-content-center border-2 dark:bg-gray-800 rounded-xl text-xs ${
                      isSelected
                        ? "border-primary text-primary selected"
                        : "border-gray-500 text-gray-500"
                    }`}
                    style={{ width: "18px", height: "18px" }}
                  >
                    {curr.symbol}
                  </span>
                  <div
                    className="d-flex flex-row"
                    style={{ lineHeight: "1.2" }}
                  >
                    <span
                      className="fw-normal text-gray-300"
                      style={{ fontSize: "14px" }}
                    >
                      {curr.code} - {curr.name}
                    </span>
                  </div>
                </div>
                {isSelected && (
                  <div className="dot right-2 absolute top-3"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Dropdown>
  );
}
