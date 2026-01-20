"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export default function Dropdown({ label, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
      <div className="dropdown__trigger d-flex align-items-center gap-1">
        {label}
        <ChevronDown size={16} />
      </div>
      {isOpen && <div className="dropdown__menu">{children}</div>}
    </div>
  );
}
