import Image from "next/image";
import { useTranslations } from "next-intl";

interface CarFeaturesProps {
  passengers: number;
  bags: number;
  has_ac: boolean;
  transmission: string;
}

export default function CarFeatures({
  passengers,
  bags,
  has_ac,
  transmission,
}: CarFeaturesProps) {
  const t = useTranslations("Features");

  return (
    <div className="car-features d-flex gap-4 text-muted mt-2">
      <div className="d-flex align-items-center gap-2" title={t("passengers")}>
        <Image
          src="/design/icons/people.svg"
          alt={t("passengers")}
          width={16}
          height={16}
        />
        <span>{passengers}</span>
      </div>
      <div className="d-flex align-items-center gap-2" title={t("bags")}>
        <Image
          src="/design/icons/shopping-bag.svg"
          alt={t("bags")}
          width={16}
          height={16}
        />
        <span>{bags}</span>
      </div>
      {has_ac && (
        <div className="d-flex align-items-center gap-2" title={t("ac")}>
          <Image
            src="/design/icons/frozen.svg"
            alt={t("ac")}
            width={16}
            height={16}
          />
          <span>A/C</span>
        </div>
      )}
      <div
        className="d-flex align-items-center gap-2"
        title={t("transmission")}
      >
        <Image
          src="/design/icons/transmition.svg"
          alt={t("transmission")}
          width={16}
          height={16}
        />
        <span>{transmission === "automatic" ? t("auto") : t("manual")}</span>
      </div>
    </div>
  );
}
