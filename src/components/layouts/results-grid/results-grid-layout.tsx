"use client";

import EconomyCarCard from "../../results/economy-car-card";
import ResultCard from "../../results/result-card";
import ResultCardSkeleton from "../../results/result-card-skeleton";
import NoResults from "../../results/no-results";
import { useCars } from "@/hooks/use-cars";
import { useTranslations } from "next-intl";

export default function ResultsGridLayout() {
  const t = useTranslations("Results");
  const { data: cars, isLoading, error } = useCars();

  if (isLoading) {
    return (
      <div className="container">
        <div className="d-flex flex-column flex-lg-row gap-4">
          <aside className="w-100 w-lg-25 flex-shrink-0">
             <EconomyCarCard /> {/* Or a Skeleton for this too if desired */}
          </aside>
          <main className="flex-fill">
            <ResultCardSkeleton />
            <ResultCardSkeleton />
            <ResultCardSkeleton />
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">{t("error")}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex flex-column flex-lg-row gap-4">
        <aside className="w-100 w-lg-25 flex-shrink-0">
          <EconomyCarCard />
        </aside>

        <main className="flex-fill">
          {cars && cars.length > 0 ? (
            cars.map((car) => (
              <ResultCard key={car.id} car={car} />
            ))
          ) : (
            <NoResults />
          )}
        </main>
      </div>
    </div>
  );
}
