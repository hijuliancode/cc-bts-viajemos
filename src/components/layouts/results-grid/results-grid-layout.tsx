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
      <div className="d-flex flex-column flex-lg-row gap-4">
        <aside className="w-100 w-lg-25 flex-shrink-0">
          <EconomyCarCard />
        </aside>

        <main className="flex-fill">
          {cars?.map((car) => (
            <ResultCard key={car.id} car={car} />
          ))}
        </main>
      </div>
    </div>
  );
}
