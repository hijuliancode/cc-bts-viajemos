import React from "react";
import Skeleton from "../ui/skeleton";

export default function ResultCardSkeleton() {
  return (
    <div className="card card--result mb-4">
      <div className="card__body d-flex flex-column flex-md-row">
        {/* Image Section */}
        <div className="p-4" style={{ width: "260px", flexShrink: 0 }}>
          <Skeleton height={140} className="mb-2" />
          <div className="d-flex gap-2 justify-content-center">
            <Skeleton width={20} height={20} variant="circle" />
            <Skeleton width={20} height={20} variant="circle" />
            <Skeleton width={20} height={20} variant="circle" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-fill border-start-md">
          <div className="d-flex justify-content-between mb-2">
            <Skeleton variant="text" width="40%" className="skeleton--text-lg" />
            <Skeleton variant="text" width="20%" />
          </div>
          
          <div className="mb-4">
             <Skeleton variant="text" width="30%" className="skeleton--text-sm" />
          </div>

          <div className="d-flex gap-4 mb-4">
            <Skeleton width={60} height={20} />
            <Skeleton width={60} height={20} />
            <Skeleton width={60} height={20} />
            <Skeleton width={60} height={20} />
          </div>
          
          <div className="d-flex justify-content-between align-items-end mt-auto">
             <Skeleton width={100} height={20} />
             <Skeleton width={120} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
