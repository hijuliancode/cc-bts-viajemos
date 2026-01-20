import Image from "next/image";
import CarFeatures from "./car-features";
import { Users, Briefcase, Snowflake, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

export default function EconomyCarCard() {
  const t = useTranslations("EconomyCard");
  const tFeatures = useTranslations("Features");

  return (
    <div className="card card--sidebar">
      <h3 className="h4 fw-bold text-start mb-4 text-body">{t("title")}</h3>

      <div
        className="card__image position-relative d-flex align-items-center justify-content-center mb-4"
        style={{ height: "140px" }}
      >
        <Image
          src="/content/cars/hyundai-santa-fe/hyundai-santa-fe.png"
          alt={t("title")}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="card__features">
        <div className="d-flex align-items-center gap-2 mb-3 text-muted">
          <Users size={20} />{" "}
          <span className="fw-medium">5 {tFeatures("passengers")}</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 text-muted">
          <Briefcase size={20} />{" "}
          <span className="fw-medium">3 {tFeatures("bags")}</span>{" "}
          <span className="text-muted ms-auto" style={{ cursor: "pointer" }}>
            ⓘ
          </span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 text-muted">
          <Snowflake size={20} />{" "}
          <span className="fw-medium">{tFeatures("ac")}</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 text-muted">
          <Settings size={20} />{" "}
          <span className="fw-medium">
            {tFeatures("automatic_transmission")}
          </span>
        </div>
      </div>
    </div>
  );
}
