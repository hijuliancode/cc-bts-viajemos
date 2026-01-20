import { Users, Briefcase, Snowflake, Settings } from "lucide-react";
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
    <div className="d-flex gap-3 text-muted mt-2">
      <div className="d-flex align-items-center gap-1" title={t("passengers")}>
        <Users size={16} /> <span>{passengers}</span>
      </div>
      <div className="d-flex align-items-center gap-1" title={t("bags")}>
        <Briefcase size={16} /> <span>{bags}</span>
      </div>
      {has_ac && (
        <div
          className="d-flex align-items-center gap-1"
          title={t("ac")}
        >
          <Snowflake size={16} /> <span>A/C</span>
        </div>
      )}
      <div className="d-flex align-items-center gap-1" title={t("transmission")}>
        <Settings size={16} />{" "}
        <span>{transmission === "automatic" ? t("auto") : t("manual")}</span>
      </div>
    </div>
  );
}
