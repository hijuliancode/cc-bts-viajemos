import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rect" | "circle";
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({
  className = "",
  variant = "rect",
  width,
  height,
}: SkeletonProps) {
  const style = {
    width,
    height,
  };

  const variantClass = variant === "text" ? "skeleton--text" : variant === "circle" ? "skeleton--circle" : "skeleton--rect";

  return <div className={`skeleton ${variantClass} ${className}`} style={style} />;
}
