import EconomyCarCard from "../../results/economy-car-card";
import ResultCard from "../../results/result-card";

export default function ResultsGridLayout() {
  return (
    <div className="container py-4">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-lg-3">
          <EconomyCarCard />
        </aside>

        {/* Main Content */}
        <main className="col-lg-9">
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </main>
      </div>
    </div>
  );
}
