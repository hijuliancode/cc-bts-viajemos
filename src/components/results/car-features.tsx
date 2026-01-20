import { Users, Briefcase, Snowflake, Settings } from "lucide-react";

export default function CarFeatures() {
  return (
    <div className="d-flex gap-3 text-muted mt-2">
      <div className="d-flex align-items-center gap-1" title="Pasajeros">
        <Users size={16} /> <span>5</span>
      </div>
      <div className="d-flex align-items-center gap-1" title="Maletas">
        <Briefcase size={16} /> <span>3</span>
      </div>
      <div className="d-flex align-items-center gap-1" title="Aire Acondicionado">
        <Snowflake size={16} /> <span>A/C</span>
      </div>
      <div className="d-flex align-items-center gap-1" title="Transmisión">
        <Settings size={16} /> <span>A/C</span>
      </div>
    </div>
  );
}
