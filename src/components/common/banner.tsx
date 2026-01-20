"use client";

import { useAppStore } from "@/store/store";

export default function Banner() {
  const { currency } = useAppStore();
  const price = 544448;

  const converted = price / currency.rate;
  const displayPrice = `${currency.symbol}${converted.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`;

  return (
    <div className="banner">
      <div className="container banner__inner">
        <div className="banner__title">
          Grandes <span className="text-muted fw-normal">(45) Resultados</span>
        </div>
        <div className="banner__price-info">
          <small className="text-primary">+ Grandes Desde</small>
          <strong>
            {displayPrice} <span className="fw-normal text-muted fs-6">| día</span>
          </strong>
        </div>
      </div>
    </div>
  );
}
