import { Star, ShieldCheck, Shield } from "lucide-react";
import CarFeatures from "./car-features";

export default function ResultCard() {
  return (
    <div className="card card--result">
      {/* Main Info Section */}
      <div className="card__main">
        <div className="d-flex align-items-center gap-2 mb-2">
          {/* Vendor Logo Placeholder */}
          <span className="fw-bold fs-5 fst-italic">Hertz</span>
          
          <div className="d-flex align-items-center text-success small">
            <Star size={14} fill="currentColor" />
            <span className="ms-1 fw-bold">4.8</span>
          </div>
          
          <span className="text-muted small">• En Aeropuerto &gt;</span>
        </div>

        <div className="row">
          <div className="col-md-5">
             {/* Car Image Placeholder */}
             <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
                <span className="text-muted">Car Image</span>
             </div>
          </div>
          <div className="col-md-7">
            <div className="badge bg-light text-success border border-success rounded-circle p-2 float-end">
               <ShieldCheck size={24} />
            </div>
            
            <h3 className="h4 fw-bold mb-1">Economico</h3>
            <p className="text-muted small mb-2">Kia Soul <span className="text-primary">o Similar</span></p>
            
            <CarFeatures />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="card__pricing">
        {/* Option 1: Con Seguros */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-start">
             <div>
                <h5 className="text-primary fw-bold mb-1">Con Seguros</h5>
                <p className="text-muted small mb-2">Tarifa Todo Incluido</p>
                <div className="d-flex gap-2 small text-success">
                   <span><ShieldCheck size={14} /> Seguro Auto Rentado</span>
                   <span><Shield size={14} /> Seguro a Terceros</span>
                </div>
             </div>
             <div className="text-end">
                <span className="badge bg-danger mb-1">-45%</span>
                <div className="h3 fw-bold mb-0">$319.552</div>
             </div>
          </div>
          <button className="btn btn-primary w-100 mt-2">Reservar</button>
        </div>

        {/* Option 2: Sin Seguros */}
        <div className="opacity-75">
           <div className="d-flex justify-content-between align-items-start">
             <div>
                <h5 className="text-dark fw-bold mb-1">Sin Seguros</h5>
                <p className="text-muted small mb-2">Tarifa Básica</p>
             </div>
             <div className="text-end">
                <div className="h3 fw-bold mb-0">$319.552</div>
             </div>
          </div>
           <button className="btn btn-outline-primary w-100 mt-2">Reservar</button>
        </div>
      </div>
    </div>
  );
}
