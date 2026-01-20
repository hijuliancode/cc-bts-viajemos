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
    <div className="card card--result mb-3">
      <div className="card-body">
        <div className="row gap-4">
          {/* Left Column: Car Info & Features */}
          <div className="col-lg-5 border-end-lg p-4 relative w-100 w-lg-auto">
            <div className="card-header">
              <div className="d-flex gap-2">
                <div
                  className="relative mr-2"
                  style={{ width: 80, height: 30 }}
                >
                  <Image
                    src={vendor.logo}
                    alt={vendor.name}
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "left center",
                    }}
                    className="bg-surface rounded"
                  />
                </div>

                <div className="divider-vertical relative top-2"></div>

                <div className="card-header__rating">
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-green mr-1"
                  />
                  <span className="fw-medium me-1 text-gray-300">
                    {vendor.rating}
                  </span>
                </div>
              </div>

              <div className="card-header__location">
                <Image
                  src={vendor.logo}
                  alt=""
                  width={14}
                  height={14}
                  className="me-1 d-none"
                />
                <span className="text-primary mr-2">
                  <PlaneIcon size={14} />
                </span>
                <span className="ms-1">{car.location.pickup_location}</span>
                <ChevronRightIcon size={14} />
              </div>
            </div>

            <div className="car-data">
              <div className="car-data__photo relative">
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{ height: "80px", position: "relative" }}
                >
                  <Image
                    src={carInfo.image_url}
                    alt={carInfo.name}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </div>

              <div className="car__name-features">
                <p className="car-data__category">{carInfo.category}</p>
                <h3 className="car-data__name gap-2 fw-bold mb-1">
                  {carInfo.name}
                  <span className="text-primary fw-normal">o Similar</span>
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
              <div
                className="absolute top-4 right-4"
                style={{ width: 60, height: 60 }}
              >
                {badge_image ? (
                  <Image
                    src={badge_image}
                    alt={badge}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <div className="badge bg-gray-100 dark:bg-gray-800 text-success border border-success rounded-circle p-2">
                    <ShieldCheck size={24} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Pricing Options */}
          <div className="d-flex flex-column justify-content-between">
            {/* Recommended Option */}
            {recommendedOption && (
              <div className="border-bottom pb-4 mb-4">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h5 className="fw-bold text-primary mb-1">
                      {recommendedOption.name}{" "}
                      <span className="text-muted fw-normal fs-6">
                        - {recommendedOption.description}
                      </span>
                    </h5>

                    <div className="d-flex gap-3 mb-2 flex-wrap">
                      {recommendedOption.inclusions.map((inclusion, idx) => (
                        <div
                          key={idx}
                          className="d-flex align-items-center text-success small fw-medium"
                        >
                          <ShieldCheck size={16} className="me-1" />
                          {inclusion}
                        </div>
                      ))}
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <a
                        href="#"
                        className="text-muted small text-decoration-none d-flex align-items-center gap-1"
                      >
                        {t("view_details")} <Info size={14} />
                      </a>
                      {recommendedOption.is_recommended && (
                        <span className="badge bg-surface text-primary border border-primary px-2 py-1 rounded-pill">
                          {t("recommended")}
                        </span>
                      )}
                      {recommendedOption.is_offer && (
                        <span className="badge bg-surface text-purple border border-purple px-2 py-1 rounded-pill">
                          {t("offer")}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-5 text-end">
                    <div className="d-flex flex-column align-items-end">
                      {(recommendedOption.original_price_per_day ||
                        recommendedOption.discount_percentage) && (
                        <div className="mb-1">
                          {recommendedOption.original_price_per_day && (
                            <span className="text-muted text-decoration-line-through small me-2">
                              {t("before")}{" "}
                              {formatCurrency(
                                recommendedOption.original_price_per_day,
                              )}
                            </span>
                          )}
                          {recommendedOption.discount_percentage && (
                            <span className="badge bg-danger rounded-pill">
                              -{recommendedOption.discount_percentage}%
                            </span>
                          )}
                        </div>
                      )}

                      <div className="d-flex align-items-baseline justify-content-end mb-1">
                        <span className="h3 fw-bold mb-0 text-dark">
                          {formatCurrency(recommendedOption.price_per_day)}
                        </span>
                        <span className="text-muted small ms-1">| dia</span>
                      </div>

                      <div className="text-muted small mb-2">
                        Total {formatCurrency(recommendedOption.total_price)}
                      </div>

                      <button className="btn btn-info text-white fw-bold px-4 w-100">
                        {recommendedOption.button_text}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {basicOption && (
              <div className="opacity-75 d-none d-lg-block">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h5 className="fw-bold text-body mb-1">
                      {basicOption.name}{" "}
                      <span className="text-muted fw-normal fs-6">
                        - {basicOption.description}
                      </span>
                    </h5>

                    <div className="d-flex gap-3 mb-2">
                      {basicOption.inclusions.map((inclusion, idx) => (
                        <div
                          key={idx}
                          className="d-flex align-items-center text-muted small"
                        >
                          <Ban size={16} className="me-1" />
                          {inclusion}
                        </div>
                      ))}
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <a
                        href="#"
                        className="text-muted small text-decoration-none d-flex align-items-center gap-1"
                      >
                        {t("view_details")} <Info size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-5 text-end">
                    <div className="d-flex flex-column align-items-end">
                      {basicOption.original_price_per_day && (
                        <div className="mb-1">
                          <span className="text-muted text-decoration-line-through small">
                            {t("before")}{" "}
                            {formatCurrency(basicOption.original_price_per_day)}
                          </span>
                        </div>
                      )}

                      <div className="d-flex align-items-baseline justify-content-end mb-1">
                        <span className="h3 fw-bold mb-0 text-body">
                          {formatCurrency(basicOption.price_per_day)}
                        </span>
                        <span className="text-muted small ms-1">
                          {t("day")}
                        </span>
                      </div>

                      <div className="text-muted small mb-2">
                        {t("total")} {formatCurrency(basicOption.total_price)}
                      </div>

                      <button className="btn btn-outline-primary fw-bold px-4 w-100">
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
  );
}
