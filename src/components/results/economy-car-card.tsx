import Image from "next/image";
import CarFeatures from "./car-features";
import { Users, Briefcase, Snowflake, Settings } from "lucide-react";

export default function EconomyCarCard() {
  return (
    <div className="card card--sidebar">
      <h3 className="h5 fw-bold text-start">Economico</h3>
      
      {/* Placeholder image - replace with actual image asset */}
      <div className="card__image bg-light rounded d-flex align-items-center justify-content-center" style={{ height: '120px' }}>
        <span className="text-muted">Car Image</span>
      </div>

      <ul className="card__features mt-3">
        <li><Users size={16} /> 5 Pasajeros</li>
        <li><Briefcase size={16} /> 3 Maletas</li>
        <li><Snowflake size={16} /> Aire Acondicionado</li>
        <li><Settings size={16} /> Caja Automatica</li>
      </ul>
    </div>
  );
}
