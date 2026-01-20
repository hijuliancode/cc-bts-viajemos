import React from "react";
import { AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NoResults() {
  const t = useTranslations("Results");

  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center bg-white rounded-lg border border-gray-200">
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <AlertCircle size={48} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{t("noResultsTitle") || "No cars found"}</h3>
      <p className="text-gray-500 max-w-md">
        {t("noResultsDesc") || "Try adjusting your search criteria or dates to find available vehicles."}
      </p>
    </div>
  );
}
