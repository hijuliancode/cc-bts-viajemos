import Image from "next/image";
import { useTranslations } from "next-intl";
import { InfoIcon } from "lucide-react";

export default function EconomyCarCard() {
  const t = useTranslations("EconomyCard");
  const tFeatures = useTranslations("Features");

  return (
    <div className="card card--sidebar d-none d-lg-block">
      <h3 className="h4 fw-bold text-start my-0 text-body">{t("title")}</h3>

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
          <Image
            src="/design/icons/people.svg"
            alt="Passengers"
            width={20}
            height={20}
          />{" "}
          <span className="fw-medium">5 {tFeatures("passengers")}</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 text-muted">
          <Image
            src="/design/icons/shopping-bag.svg"
            alt="Bags"
            width={20}
            height={20}
          />{" "}
          <span className="fw-medium">3 {tFeatures("bags")}</span>{" "}
          <span className="text-muted ms-auto" style={{ cursor: "pointer" }}>
            <InfoIcon className="text-gray-200 mt-1" size={16} />
          </span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 text-muted">
          <Image
            src="/design/icons/frozen.svg"
            alt="AC"
            width={20}
            height={20}
          />{" "}
          <span className="fw-medium">{tFeatures("ac")}</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 text-muted">
          <Image
            src="/design/icons/transmition.svg"
            alt="Transmission"
            width={20}
            height={20}
          />{" "}
          <span className="fw-medium">
            {tFeatures("automatic_transmission")}
          </span>
        </div>
      </div>
    </div>
  );
}
