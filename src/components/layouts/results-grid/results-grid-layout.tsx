"use client";

import EconomyCarCard from "../../results/economy-car-card";
import ResultCard from "../../results/result-card";
import { useCars } from "@/hooks/use-cars";

export default function ResultsGridLayout() {
  const { data: cars, isLoading, error } = useCars();

  if (isLoading) {
    return (
      <div className="container py-4">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">Error al cargar resultados</div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-lg-3">
          <EconomyCarCard />
        </aside>

        {/* Main Content */}
        <main className="col-lg-9">
          {cars?.map((car) => (
            <ResultCard key={car.id} car={car} />
          ))}
        </main>
      </div>
    </div>
  );
}
