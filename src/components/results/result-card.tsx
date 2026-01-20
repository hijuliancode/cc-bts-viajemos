import { Star, ShieldCheck, Ban, Info } from "lucide-react";
import Image from "next/image";
import CarFeatures from "./car-features";
import { type Car } from "@/services/cars-service";
import { useAppStore } from "@/store/store";

interface ResultCardProps {
  car: Car;
}

export default function ResultCard({ car }: ResultCardProps) {
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
    <div className="card card--result mb-3 shadow-sm border-0">
      <div className="card-body p-4">
        <div className="row gap-4">
          <div className="col-lg-5 border-end-lg">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div style={{ width: 80, height: 30, position: "relative" }}>
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

              <div className="d-flex align-items-center bg-success text-white px-2 py-0.5 rounded small">
                <span className="fw-bold me-1">{vendor.rating}</span>
                <Star size={12} fill="currentColor" />
              </div>

              <div className="d-flex align-items-center text-muted small">
                <Image
                  src={vendor.logo}
                  alt=""
                  width={14}
                  height={14}
                  className="me-1 d-none"
                />
                <span className="text-primary">✈</span>
                <span className="ms-1">{car.location.pickup_location}</span>
              </div>
            </div>

            <div className="position-relative mb-3">
              <div
                className="d-flex align-items-center justify-content-center mb-3"
                style={{ height: "160px", position: "relative" }}
              >
                <Image
                  src={carInfo.image_url}
                  alt={carInfo.name}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>

              {/* Travel Insurance Badge */}
              {(badge_image || badge) && (
                <div
                  className="position-absolute"
                  style={{ top: 0, right: 0, width: 60, height: 60 }}
                >
                  {badge_image ? (
                    <Image
                      src={badge_image}
                      alt={badge}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <div className="badge bg-light text-success border border-success rounded-circle p-2">
                      <ShieldCheck size={24} />
                    </div>
                  )}
                </div>
              )}
            </div>

            <h3 className="h4 fw-bold mb-1">{carInfo.category}</h3>
            <p className="text-muted mb-3">
              <span className="fw-semibold text-dark">{carInfo.name}</span>{" "}
              <span className="text-primary">o Similar</span>
            </p>

            <CarFeatures
              passengers={carInfo.features.passengers}
              bags={carInfo.features.bags}
              has_ac={carInfo.features.has_ac}
              transmission={carInfo.features.transmission}
            />
          </div>

          {/* Right Column: Pricing Options */}
          <div className="col-lg-7 d-flex flex-column justify-content-between">
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
                        Ver Detalles <Info size={14} />
                      </a>
                      {recommendedOption.is_recommended && (
                        <span className="badge bg-white text-primary border border-primary px-2 py-1 rounded-pill">
                          Recomendado
                        </span>
                      )}
                      {recommendedOption.is_offer && (
                        <span className="badge bg-white text-purple border border-purple px-2 py-1 rounded-pill">
                          ¡Oferta de Hoy!
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
                              Antes{" "}
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
              <div className="opacity-75">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h5 className="fw-bold text-dark mb-1">
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
                        Ver Detalles <Info size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-5 text-end">
                    <div className="d-flex flex-column align-items-end">
                      {basicOption.original_price_per_day && (
                        <div className="mb-1">
                          <span className="text-muted text-decoration-line-through small">
                            Antes{" "}
                            {formatCurrency(basicOption.original_price_per_day)}
                          </span>
                        </div>
                      )}

                      <div className="d-flex align-items-baseline justify-content-end mb-1">
                        <span className="h3 fw-bold mb-0 text-dark">
                          {formatCurrency(basicOption.price_per_day)}
                        </span>
                        <span className="text-muted small ms-1">| dia</span>
                      </div>

                      <div className="text-muted small mb-2">
                        Total {formatCurrency(basicOption.total_price)}
                      </div>

                      <button className="btn btn-outline-primary fw-bold px-4 w-100">
                        {basicOption.button_text}
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
