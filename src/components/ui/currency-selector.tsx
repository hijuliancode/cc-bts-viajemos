"use client";

import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { CircleDollarSign } from "lucide-react";
import { useAppStore, type Currency } from "@/store/store";

export default function CurrencySelector() {
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
      <div className="p-3" style={{ maxHeight: "300px", overflowY: "auto" }}>
        <h6 className="dropdown-header px-0 mb-2 text-dark fw-bold">Selecciona tu Moneda</h6>
        {currencies.map((curr) => (
          <div
            key={curr.code}
            className={`dropdown__item rounded ${currency.code === curr.code ? "bg-light text-primary fw-bold" : ""}`}
            onClick={() => setCurrency(curr)}
            style={{ cursor: "pointer" }}
          >
            <span className="fw-bold" style={{ width: "30px", display: "inline-block" }}>{curr.symbol}</span>
            <span>{curr.code} - {curr.name}</span>
          </div>
        ))}
      </div>
    </Dropdown>
  );
}
