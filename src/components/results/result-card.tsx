import {
  Star,
  ShieldCheck,
  Ban,
  Info,
  PlaneIcon,
  ChevronRightIcon,
} from "lucide-react";
import Image from "next/image";
import CarFeatures from "./car-features";
import { type Car } from "@/services/cars-service";
import { useAppStore } from "@/store/store";
import { useTranslations } from "next-intl";

interface ResultCardProps {
  car: Car;
}

export default function ResultCard({ car }: ResultCardProps) {
  const t = useTranslations("CarCard");
  const { vendor, car: carInfo, pricing, badge, badge_image } = car;
  const { currency } = useAppStore();

  const formatCurrency = (value: number) => {
    const converted = value / currency.rate;
    return `${currency.symbol}${converted.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`;
  };

  const recommendedOption =
    pricing.options.find((opt) => opt.type === "inclusive") ||
    pricing.options[0];
  const basicOption =
    pricing.options.find((opt) => opt.type === "basic") || pricing.options[1];

  return (
    <div className="card card--result">
      <div className="card__body">
        <div className="card__layout">
          {/* Left Column: Car Info & Features */}
          <div className="card__section card__section--info">
            <div className="card__header">
              <div className="card__vendor-logo">
                <Image
                  src={vendor.logo}
                  alt={vendor.name}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                />
              </div>

              <div className="vr"></div>

              <div className="card__rating">
                <Star size={14} className="icon" />
                <span className="value">{vendor.rating}</span>
              </div>

              <div className="card__location">
                <PlaneIcon size={14} className="icon-primary" />
                <span className="text">{car.location.pickup_location}</span>
                <ChevronRightIcon size={14} />
              </div>
            </div>

            <div className="card__vehicle-details">
              <div className="card__vehicle-image">
                <div className="image-wrapper">
                  <Image
                    src={carInfo.image_url}
                    alt={carInfo.name}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>
              <div className="card__vehicle-info">
                <p className="category">{carInfo.category}</p>
                <h3 className="name">
                  {carInfo.name} <span className="similar">o Similar</span>
                </h3>

                <CarFeatures
                  passengers={carInfo.features.passengers}
                  bags={carInfo.features.bags}
                  has_ac={carInfo.features.has_ac}
                  transmission={carInfo.features.transmission}
                />
              </div>
            </div>

            {/* Travel Insurance Badge */}
            {(badge_image || badge) && (
              <div className="card__insurance-badge">
                {badge_image ? (
                  <Image
                    src={badge_image}
                    alt={badge}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <div className="badge-fallback">
                    <ShieldCheck size={30} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Pricing Options */}
          <div className="card__section card__section--pricing">
            <div className="card__pricing-container">
              {/* Recommended Option */}
              {recommendedOption && (
                <div className="card__pricing-option card__pricing-option--recommended">
                  <div className="option-content">
                    <div className="option-details">
                      <h5 className="title">
                        {recommendedOption.name}{" "}
                        <span className="description">
                          - {recommendedOption.description}
                        </span>
                      </h5>

                      <div className="inclusions">
                        {recommendedOption.inclusions.map((inclusion, idx) => (
                          <div key={idx} className="inclusion-item">
                            <ShieldCheck size={14} className="icon" />
                            {inclusion}
                          </div>
                        ))}
                      </div>

                      <div className="actions">
                        <div className="view-details">
                          {t("view_details")} <Info size={14} />
                        </div>
                        {recommendedOption.is_recommended && (
                          <span className="badge-recommended">
                            {t("recommended")}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="option-price">
                      <div className="price-header">
                        <div className="price-meta">
                          {recommendedOption.original_price_per_day && (
                            <span className="original-price">
                              {t("before")}{" "}
                              {formatCurrency(
                                recommendedOption.original_price_per_day,
                              )}
                            </span>
                          )}
                          {recommendedOption.discount_percentage && (
                            <span className="discount-badge">
                              -{recommendedOption.discount_percentage}%
                            </span>
                          )}
                        </div>

                        <div className="main-price">
                          <span className="amount">
                            {formatCurrency(recommendedOption.price_per_day)}
                          </span>
                          <span className="period">| {t("day")}</span>
                        </div>

                        <div className="total-price">
                          Total {formatCurrency(recommendedOption.total_price)}
                        </div>

                        <button className="btn-reserve">
                          {recommendedOption.button_text}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Basic Option */}
              {basicOption && (
                <div className="card__pricing-option card__pricing-option--basic">
                  <div className="option-content">
                    <div className="option-details">
                      <h5 className="title">
                        {basicOption.name}{" "}
                        <span className="description">
                          - {basicOption.description}
                        </span>
                      </h5>

                      <div className="inclusions">
                        <div className="inclusion-item muted">
                          <Ban size={14} className="icon" />
                          {t("no_insurance_rate") || "Tarifa sin Seguros"}
                        </div>
                      </div>

                      <div className="actions">
                        <div className="view-details">
                          {t("view_details")} <Info size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="option-price">
                      <div className="price-header">
                        {basicOption.original_price_per_day && (
                          <div className="price-meta">
                            <span className="original-price">
                              {t("before")}{" "}
                              {formatCurrency(
                                basicOption.original_price_per_day,
                              )}
                            </span>
                          </div>
                        )}

                        <div className="main-price">
                          <span className="amount">
                            {formatCurrency(basicOption.price_per_day)}
                          </span>
                          <span className="period">| {t("day")}</span>
                        </div>

                        <div className="total-price">
                          {t("total")} {formatCurrency(basicOption.total_price)}
                        </div>

                        <button className="btn-reserve btn-reserve--outline">
                          {basicOption.button_text === "Reservar"
                            ? t("reserve")
                            : t("default")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
