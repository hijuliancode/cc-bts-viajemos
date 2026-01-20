import { Users, Briefcase, Snowflake, Settings } from "lucide-react";

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
  return (
    <div className="d-flex gap-3 text-muted mt-2">
      <div className="d-flex align-items-center gap-1" title="Pasajeros">
        <Users size={16} /> <span>{passengers}</span>
      </div>
      <div className="d-flex align-items-center gap-1" title="Maletas">
        <Briefcase size={16} /> <span>{bags}</span>
      </div>
      {has_ac && (
        <div
          className="d-flex align-items-center gap-1"
          title="Aire Acondicionado"
        >
          <Snowflake size={16} /> <span>A/C</span>
        </div>
      )}
      <div className="d-flex align-items-center gap-1" title="Transmisión">
        <Settings size={16} />{" "}
        <span>{transmission === "automatic" ? "Auto" : "Man"}</span>
      </div>
    </div>
  );
}
