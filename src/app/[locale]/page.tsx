import Header from "@/components/common/header";
import Banner from "@/components/common/banner";
import ResultsGridLayout from "@/components/layouts/results-grid/results-grid-layout";

export default function Home() {
  return (
    <div className="bg-body min-vh-100">
      <Header />
      <Banner />
      <ResultsGridLayout />
    </div>
  );
}
